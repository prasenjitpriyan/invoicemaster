import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Invoice, InvoiceFormPayloadAction } from 'src/types';
import { fetchInvoices } from './invoiceActions';

type loadingState = 'idle' | 'loading' | 'succeeded' | 'failed';
export type checkBoxName = 'draft' | 'pending' | 'paid';
type error = string | null;

interface InvoiceState {
  loadingStatus: loadingState;
  invoices: Invoice[];
  filteredInvoices: Invoice[];
  error: error;
  controlsChecked: { name: checkBoxName; checked: boolean }[];
}

const initialState: InvoiceState = {
  loadingStatus: 'idle',
  invoices: [],
  filteredInvoices: [],
  error: null,
  controlsChecked: [
    { name: 'draft', checked: false },
    { name: 'pending', checked: false },
    { name: 'paid', checked: false },
  ],
};

const invoiceSlice = createSlice({
  name: '@@invoice',
  initialState,
  reducers: {
    toggleCheckbox: (state, action: PayloadAction<checkBoxName>) => {
      state.controlsChecked = state.controlsChecked.map((checkbox) => {
        if (checkbox.name === action.payload) {
          return { name: checkbox.name, checked: !checkbox.checked };
        }
        return checkbox;
      });
      state.filteredInvoices = state.invoices.filter((invoice) => {
        return state.controlsChecked.find((checkbox) => {
          return invoice.status === checkbox.name && checkbox.checked;
        });
      });
    },
    deleteInvoice: (state, action: PayloadAction<string>) => {
      state.invoices = state.invoices.filter(
        (invoice) => invoice.id !== action.payload,
      );
      state.filteredInvoices = state.invoices;
    },
    markInvoiceAsPaid: (state, action: PayloadAction<string>) => {
      state.invoices = state.invoices.map((invoice) => {
        if (invoice.id === action.payload) {
          return { ...invoice, status: 'paid' };
        }
        return invoice;
      });
      state.filteredInvoices = state.invoices;
    },
    changeInvoice: {
      reducer(
        state,
        action: PayloadAction<
          InvoiceFormPayloadAction,
          string,
          { invoiceId: string }
        >,
      ) {
        const invoiceCreatedDate = new Date(action.payload.invoiceDate);
        const paymentDueDate = new Date(
          invoiceCreatedDate.setDate(
            invoiceCreatedDate.getDate() + action.payload.invoicePaymentPeriod,
          ),
        )
          .toISOString()
          .split('T')[0];

        state.invoices = state.invoices.map((invoice) => {
          if (invoice.id === action.meta.invoiceId) {
            return {
              ...invoice,
              clientName: action.payload.clientName,
              description: action.payload.projectDescription,
              clientEmail: action.payload.clientEmail,
              createdAt: action.payload.invoiceDate,
              paymentTerms: action.payload.invoicePaymentPeriod,
              paymentDue: paymentDueDate,
              senderAddress: {
                street: action.payload.senderStreetAddress,
                city: action.payload.senderCity,
                postCode: action.payload.senderPostCode,
                country: action.payload.senderCountry,
              },
              clientAddress: {
                country: action.payload.clientCountry,
                postCode: action.payload.clientPostCode,
                street: action.payload.clientStreet,
                city: action.payload.clientCity,
              },
              items: [...action.payload.invoiceItems],
              total: [...action.payload.invoiceItems].reduce(
                (total, item) => total + item.total,
                0,
              ),
            };
          }
          return invoice;
        });
        state.filteredInvoices = state.invoices;
      },
      prepare(payload: InvoiceFormPayloadAction, invoiceId: string) {
        return { payload, meta: { invoiceId } };
      },
    },
    addNewInvoice: (state, action: PayloadAction<Invoice>) => {
      state.invoices = [...state.invoices, action.payload];
      state.filteredInvoices = state.invoices;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.loadingStatus = 'succeeded';
        state.invoices = action.payload;
        state.filteredInvoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.payload ?? 'Failed to fetch invoices';
      });
  },
});

export default invoiceSlice.reducer;
export const {
  toggleCheckbox,
  deleteInvoice,
  markInvoiceAsPaid,
  changeInvoice,
  addNewInvoice,
} = invoiceSlice.actions;

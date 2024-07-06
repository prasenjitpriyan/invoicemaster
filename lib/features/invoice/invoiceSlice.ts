import { createSlice } from "@reduxjs/toolkit";

interface InvoiceState {
  invoiceNumber: number;
  invoiceFrom: string;
  invoiceTo: string;
}

const INVOICES_LIST: InvoiceState[] = [
  { invoiceNumber: 0, invoiceFrom: "", invoiceTo: "" },
];

const initialState = {
  invoices: INVOICES_LIST,
};

export const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    addNewInvoice: (state, action) => {
      const newItem = action.payload;
      state.invoices.push({
        invoiceNumber: newItem.invoiceNumber,
        invoiceFrom: newItem.invoiceFrom,
        invoiceTo: newItem.invoiceTo,
      });
    },
  },
});

export const { addNewInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;

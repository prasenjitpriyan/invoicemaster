export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export type InvoiceStatus = 'paid' | 'draft' | 'pending';

export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: InvoiceStatus;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
}

export type Theme = 'light' | 'dark';

export interface InvoiceFormValues {
  senderStreetAddress: string;
  senderCity: string;
  senderPostCode: string;
  senderCountry: string;
  clientName: string;
  clientEmail: string;
  clientStreet: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  invoiceDate: Date;
  invoicePaymentPeriod: number;
  projectDescription: string;
  invoiceItems: Item[];
}

export interface InvoiceFormPayloadAction
  extends Omit<InvoiceFormValues, 'invoiceDate'> {
  invoiceDate: string;
}

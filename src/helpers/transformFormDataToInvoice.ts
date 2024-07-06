import { Invoice, InvoiceFormPayloadAction, InvoiceStatus } from 'src/types';

export const transformFormDataToInvoice = (
  data: InvoiceFormPayloadAction,
  status?: InvoiceStatus,
): Invoice => {
  const invoiceCreatedDate = new Date(data.invoiceDate);
  const paymentDueDate = new Date(
    invoiceCreatedDate.setDate(
      invoiceCreatedDate.getDate() + data.invoicePaymentPeriod,
    ),
  )
    .toISOString()
    .split('T')[0];

  return {
    id: generateId(),
    createdAt: data.invoiceDate,
    paymentDue: paymentDueDate,
    description: data.projectDescription,
    paymentTerms: data.invoicePaymentPeriod,
    clientName: data.clientName,
    clientEmail: data.clientEmail,
    status: status ?? 'pending',
    senderAddress: {
      street: data.senderStreetAddress,
      city: data.senderCity,
      postCode: data.senderPostCode,
      country: data.senderCountry,
    },
    clientAddress: {
      street: data.clientStreet,
      city: data.clientCity,
      postCode: data.clientPostCode,
      country: data.clientCountry,
    },
    items: data.invoiceItems,
    total: data.invoiceItems.reduce((total, item) => total + item.total, 0),
  };
};

function generateId(): string {
  let letters = '';
  let numbers = '';

  for (let i = 0; i < 2; i++) {
    letters += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  while (numbers.length < 4) {
    const digit = Math.floor(Math.random() * 10).toString();
    if (!numbers.includes(digit)) {
      numbers += digit;
    }
  }
  return letters + numbers;
}

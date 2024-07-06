export function InvoiceIdIsString(id: unknown): asserts id is string {
  if (typeof id !== 'string') throw new Error('Not a string');
}

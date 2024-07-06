import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import { checkBoxName } from "./InvoiceSlice";

const selected = (state: RootState) => state;
const checkBoxNameSelector = (_: RootState, name: checkBoxName) => name;
const concreteInvoiceId = (_: RootState, id: string) => id;

export const selectInvoices = createSelector(
  selected,
  (state) => state.invoice.filteredInvoices
);

export const selectControlsChecked = createSelector(
  [selected, checkBoxNameSelector],
  (state, name) =>
    state.invoice.controlsChecked.find(
      (checkbox: any) => checkbox.name === name
    )
);

export const selectInvoiceById = createSelector(
  [selected, concreteInvoiceId],
  (state, id) =>
    state.invoice.filteredInvoices.find((invoice: any) => invoice.id === id)
);

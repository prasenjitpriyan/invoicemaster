import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchInvoices } from "./invoiceActions";
import { selectInvoices } from "./invoiceSelectors";

export const useInvoices = () => {
  const dispatch = useAppDispatch();
  const invoices = useAppSelector(selectInvoices);

  useEffect(() => {
    if (invoices.length === 0) {
      dispatch(fetchInvoices());
    }
  });

  return invoices;
};

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/lib/features/theme/themeSlice";
import invoiceReducer from "@/lib/features/invoice/invoiceSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      invoices: invoiceReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

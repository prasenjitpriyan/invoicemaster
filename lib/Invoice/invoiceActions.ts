import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import { Invoice } from "@/types";
import { Extra } from "@/types/extra";

export const fetchInvoices = createAsyncThunk<
  Invoice[],
  void,
  {
    state: RootState;
    rejectValue: string;
    extra: Extra;
  }
>("@@invoice/fetchInvoices", async (_, { rejectWithValue, extra }) => {
  try {
    const { data } = await extra.client.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data.json`
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

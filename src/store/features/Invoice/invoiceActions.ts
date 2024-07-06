import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';
import { Invoice } from 'src/types';
import { Extra } from 'src/types/extra.ts';

export const fetchInvoices = createAsyncThunk<
  Invoice[],
  void,
  {
    state: RootState;
    rejectValue: string;
    extra: Extra;
  }
>('@@invoice/fetchInvoices', async (_, { rejectWithValue, extra }) => {
  try {
    const { data } = await extra.client.get(
      `${import.meta.env.BASE_URL}/data.json`,
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

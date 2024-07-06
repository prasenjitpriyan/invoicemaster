import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

const selected = (state: RootState) => state;

export const selectTheme = createSelector(selected, (state) => state.theme);

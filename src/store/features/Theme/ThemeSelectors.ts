import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';

const selected = (state: RootState) => state;

export const selectTheme = createSelector(selected, (state) => state.theme);

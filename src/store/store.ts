import { combineReducers, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import invoiceReducer from './features/Invoice/InvoiceSlice';
import { themeReducer } from './features/Theme/ThemeSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  theme: themeReducer,
  invoice: invoiceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.MODE !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk: {
        extraArgument: {
          client: axios,
        },
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

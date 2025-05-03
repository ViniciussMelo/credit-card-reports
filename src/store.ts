import { configureStore } from '@reduxjs/toolkit';
import { chargesReducer } from './reducers/charges/reducer';
import { persistChargesMiddleware } from './reducers/charges/middleware';

export const store = configureStore({
  reducer: {
    charges: chargesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistChargesMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

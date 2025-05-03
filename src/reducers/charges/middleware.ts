import { Middleware } from 'redux';

export const persistChargesMiddleware: Middleware = store => next => action => {
  const result = next(action);

  const state = store.getState();
  localStorage.setItem('@credit-card-reports:charges-data-state-1.0.0', JSON.stringify(state.charges.data));
  localStorage.setItem('@credit-card-reports:charges-month-state-1.0.0', state.charges.selectedMonth || '');

  return result;
};

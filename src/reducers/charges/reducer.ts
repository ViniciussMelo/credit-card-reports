import { ChargesActionTypes } from './actions';
import { ICharge } from '../../utils/csv';

interface ChargesState {
  data: {
    [mesAno: string]: ICharge[]
  };
  selectedMonth: string | null;
}

const persistedData = localStorage.getItem('@credit-card-reports:charges-data-state-1.0.0')
const persistedMonth = localStorage.getItem('@credit-card-reports:charges-month-state-1.0.0')

console.log('persistedData: ', persistedData)

const initialState: ChargesState = {
  data: persistedData ? JSON.parse(persistedData) : {},
  selectedMonth: persistedMonth || null,
}
 
export function chargesReducer(
  state: ChargesState = initialState,
  action: any
): ChargesState {
  switch (action.type) {
    case ChargesActionTypes.SET_CHARGES:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.month]: action.payload.charges,
        },
        selectedMonth: action.payload.month,
      };
    case ChargesActionTypes.CLEAR_CHARGES:
      return {
        ...state,
        data: {},
        selectedMonth: null
      }
    case ChargesActionTypes.SELECT_MONTH:
        return {
          ...state,
          selectedMonth: action.payload ?? null,
        }
    default:
      return state;
  }
}
import { ICharge } from '../../utils/csv';

export enum ChargesActionTypes {
  SET_CHARGES = 'SET_CHARGES',
  CLEAR_CHARGES = 'CLEAR_CHARGES',
  SELECT_MONTH = 'SELECT_MONTH'
}

export function setChargers(month: string, charges: ICharge[]) {
  return {
    type: ChargesActionTypes.SET_CHARGES,
    payload: {
      month,
      charges
    }
  }
}

export function clearChargers() {
  return {
    type: ChargesActionTypes.CLEAR_CHARGES
  }
}

export function selectMonth(month: string) {
  return {
    type: ChargesActionTypes.SELECT_MONTH,
    payload: month,
  }
}
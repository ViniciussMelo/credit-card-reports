import { ICharge } from '../../utils/csv';

export enum ChargesActionTypes {
  SET_CHARGES = 'SET_CHARGES',
  SELECT_MONTH = 'SELECT_MONTH',
  DELETE_CHARGES = 'DELETE_CHARGES'
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

export function deleteCharges(month: string | null) {
  return {
    type: ChargesActionTypes.DELETE_CHARGES,
    payload: month
  }
}

export function selectMonth(month: string) {
  return {
    type: ChargesActionTypes.SELECT_MONTH,
    payload: month,
  }
}
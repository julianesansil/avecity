import ICity from '~/src/interfaces/ICity';
import { ActionNames } from './types';

// Action Creators
export function addCity(city: ICity) {
  return {
    type: ActionNames.ADD_CITY,
    payload: city,
  };
}

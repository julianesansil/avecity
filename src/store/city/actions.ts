import CityEntity from '~/src/entities/CityEntity';
import { ActionNames } from './types';

// Action Creators
export function addCity(city: CityEntity) {
  return {
    type: ActionNames.ADD_CITY,
    payload: city,
  };
}

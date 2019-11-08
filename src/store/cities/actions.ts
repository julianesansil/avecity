import CityEntity from '~/src/model/CityEntity';
import { ActionNames } from './types';

// Action Creators
export function addCity(city: CityEntity) {
  city.id = Math.random().toString();

  return {
    type: ActionNames.ADD_CITY,
    payload: { city },
  };
}

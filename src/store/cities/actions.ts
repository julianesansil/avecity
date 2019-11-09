import moment from 'moment';

import CityEntity from '~/src/model/CityEntity';
import { ActionNames } from './types';

// Action Creators
export function addCity(city: CityEntity) {
  city.id = Math.random()
    .toString()
    .replace('0.', '');
  city.createdAt = moment(new Date());

  return {
    type: ActionNames.ADD_CITY,
    payload: { city },
  };
}

import moment from 'moment';

import LocationEntity from '~/src/model/LocationEntity';
import { ActionNames } from './types';

// Action Creators
export function addLocation(idCity: string, location: LocationEntity) {
  location.id = Math.random()
    .toString()
    .replace('0.', '');
  location.createdAt = moment(new Date());

  return {
    type: ActionNames.ADD_LOCATION,
    payload: { idCity, location },
  };
}

export function editLocation(location: LocationEntity) {
  location.createdAt = moment(new Date());

  return {
    type: ActionNames.EDIT_LOCATION,
    payload: { location },
  };
}

export function removeLocation(idLocation: string, idCity: string) {
  return {
    type: ActionNames.REMOVE_LOCATION,
    payload: { idLocation, idCity },
  };
}

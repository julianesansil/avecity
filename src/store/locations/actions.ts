import LocationEntity from '~/src/model/LocationEntity';
import { ActionNames } from './types';

// Action Creators
export function addLocation(idCity: string, location: LocationEntity) {
  location.id = Math.random().toString();

  return {
    type: ActionNames.ADD_LOCATION,
    payload: { idCity, location },
  };
}

export function editLocation(location: LocationEntity) {
  return {
    type: ActionNames.EDIT_LOCATION,
    payload: { location },
  };
}

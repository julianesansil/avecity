import { AnyAction } from 'redux';

import CityEntity from '~/src/entities/CityEntity';
import { Location } from 'istanbul-lib-coverage';

// State Type
export interface CityState {
  cities: CityEntity[];
  locations: Location[];
}

// Action Names
export enum ActionNames {
  ADD_CITY = 'ADD_CITY',
  ADD_LOCATION = 'ADD_LOCATION',
  EDIT_LOCATION = 'EDIT_LOCATION',
  REMOVE_LOCATION = 'REMOVE_LOCATION',
}

// Action Types
interface AddCityAction extends AnyAction {
  type: typeof ActionNames.ADD_CITY;
  payload: CityEntity;
}

export interface ActionTypes extends AddCityAction {}

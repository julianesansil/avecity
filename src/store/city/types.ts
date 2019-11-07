import { AnyAction } from 'redux';

import ICity from '~/src/interfaces/ICity';
import ILocation from '~/src/interfaces/ILocation';

// State Type
export interface CityState {
  cities: ICity[];
  locations: ILocation[];
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
  payload: ICity;
}

export interface ActionTypes extends AddCityAction {}

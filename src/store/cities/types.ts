import { AnyAction } from 'redux';

import CityEntity, { NormalizedCity } from '~/src/model/CityEntity';
import { AddLocationAction } from '../locations/types';

export interface CityState {
  [id: string]: NormalizedCity;
}

// Action Names
export enum ActionNames {
  ADD_CITY = 'ADD_CITY',
  ADD_LOCATION = 'ADD_LOCATION',
}

// Action Types
interface AddCityAction extends AnyAction {
  type: typeof ActionNames.ADD_CITY;
  payload: {
    city: CityEntity;
  };
}

export type ActionTypes = AddCityAction & AddLocationAction;

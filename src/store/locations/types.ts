import { AnyAction } from 'redux';

import LocationEntity, { NormalizedLocation } from '~/src/model/LocationEntity';

export interface LocationState {
  [id: string]: NormalizedLocation;
}

// Action Names
export enum ActionNames {
  ADD_LOCATION = 'ADD_LOCATION',
  EDIT_LOCATION = 'EDIT_LOCATION',
}

// Action Types
export interface AddLocationAction extends AnyAction {
  type: typeof ActionNames.ADD_LOCATION;
  payload: {
    idCity: string;
    location: LocationEntity;
  };
}

export interface EditLocationAction extends AnyAction {
  type: typeof ActionNames.EDIT_LOCATION;
  payload: {
    location: LocationEntity;
  };
}

export type ActionTypes = AddLocationAction & EditLocationAction;

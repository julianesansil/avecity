import { LocationState, ActionNames, ActionTypes } from './types';
import { NormalizedLocation } from '~/src/model/LocationEntity';
import { statements } from '@babel/template';

const INITIAL_STATE: LocationState = {};

function upsertLocation(
  state = INITIAL_STATE,
  action: ActionTypes,
): LocationState {
  const { payload } = action;
  const { location } = payload;

  const newLocation: NormalizedLocation = location;

  return {
    ...state,
    [location.id]: newLocation,
  };
}

function removeLocation(
  state = INITIAL_STATE,
  action: ActionTypes,
): LocationState {
  const { payload } = action;
  const { idLocation } = payload;

  delete state[idLocation];
  return { ...state };
}

export default function locationsReducer(
  state = INITIAL_STATE,
  action: ActionTypes,
): LocationState {
  const { type } = action;

  switch (type) {
    case ActionNames.ADD_LOCATION:
    case ActionNames.EDIT_LOCATION:
      return upsertLocation(state, action);

    case ActionNames.REMOVE_LOCATION:
      return removeLocation(state, action);

    default:
      return state;
  }
}

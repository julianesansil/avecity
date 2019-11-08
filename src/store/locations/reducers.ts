import { LocationState, ActionNames, ActionTypes } from './types';
import { NormalizedLocation } from '~/src/model/LocationEntity';

const INITIAL_STATE: LocationState = {};

function addLocationEntry(
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

export default function locationsReducer(
  state = INITIAL_STATE,
  action: ActionTypes,
): LocationState {
  const { type } = action;

  switch (type) {
    case ActionNames.ADD_LOCATION:
      return addLocationEntry(state, action);

    default:
      return state;
  }
}

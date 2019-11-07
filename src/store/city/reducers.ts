import { ActionNames, ActionTypes, CityState } from './types';

// Reducer
const INITIAL_STATE: CityState = {
  cities: [],
  locations: [],
};

export default function cityReducer(
  state = INITIAL_STATE,
  action: ActionTypes,
): CityState {
  const { type, payload } = action;

  switch (type) {
    case ActionNames.ADD_CITY:
      return { ...state, cities: [...state.cities, payload] };

    default:
      return state;
  }
}

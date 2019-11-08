import { CityState, ActionNames, ActionTypes } from './types';
import { NormalizedCity } from '~/src/model/CityEntity';

const INITIAL_STATE: CityState = {};

function addCity(state = INITIAL_STATE, action: ActionTypes): CityState {
  const { payload } = action;
  const { city } = payload;

  const newCity: NormalizedCity = {
    id: city.id,
    name: city.name,
    countryName: city.countryName,
    locations: [],
  };

  return {
    ...state,
    [city.id]: newCity,
  };
}

function addLocation(state = INITIAL_STATE, action: ActionTypes): CityState {
  const { payload } = action;
  const { idCity, location } = payload;

  const city = state[idCity];

  return {
    ...state,
    [idCity]: {
      ...city,
      locations: city.locations
        ? [...city.locations, location.id]
        : [location.id],
    },
  };
}

export default function citiesReducer(
  state = INITIAL_STATE,
  action: ActionTypes,
): CityState {
  const { type } = action;

  switch (type) {
    case ActionNames.ADD_CITY:
      return addCity(state, action);

    case ActionNames.ADD_LOCATION:
      return addLocation(state, action);

    default:
      return state;
  }
}

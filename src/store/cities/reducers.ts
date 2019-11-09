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
    createdAt: city.createdAt,
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
  const updatedLocations = [...city.locations, location.id];

  return {
    ...state,
    [idCity]: {
      ...city,
      locations: updatedLocations,
    },
  };
}

function removeLocation(state = INITIAL_STATE, action: ActionTypes): CityState {
  const { payload } = action;
  const { idLocation, idCity } = payload;

  const city = state[idCity];
  const updatedLocations = city.locations.filter(
    location => location !== idLocation,
  );

  return {
    ...state,
    [idCity]: {
      ...city,
      locations: updatedLocations,
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

    case ActionNames.REMOVE_LOCATION:
      return removeLocation(state, action);

    default:
      return state;
  }
}

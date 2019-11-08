import { ApplicationState } from '..';
import LocationEntity from '~/src/model/LocationEntity';

export function getLocation(
  state: ApplicationState,
  idLocation: string,
): LocationEntity {
  return state.locations[idLocation];
}

export function selectLocationsByCity(
  state: ApplicationState,
  idCity: string,
): LocationEntity[] | undefined {
  const normalizedCity = state.cities[idCity];

  if (normalizedCity.locations) {
    return normalizedCity.locations.map(idLocation =>
      getLocation(state, idLocation),
    );
  }

  return undefined;
}

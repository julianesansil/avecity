import { ApplicationState } from '..';
import LocationEntity from '~/src/model/LocationEntity';

export function getLocation(
  state: ApplicationState,
  idLocation: string,
): LocationEntity {
  return state.locations[idLocation];
}

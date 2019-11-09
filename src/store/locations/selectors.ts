import { ApplicationState } from '..';
import LocationEntity from '~/src/model/LocationEntity';
import SectionData from '~/src/model/SectionData';

export function getLocation(
  state: ApplicationState,
  idLocation: string,
): LocationEntity {
  return state.locations[idLocation];
}

export function selectLocationsByCity(
  state: ApplicationState,
  idCity: string,
): LocationEntity[] {
  const normalizedCity = state.cities[idCity];

  return normalizedCity.locations.map(idLocation =>
    getLocation(state, idLocation),
  );
}

export function groupLocationsByType(
  state: ApplicationState,
  idCity: string,
): SectionData<LocationEntity[]>[] {
  const locations = selectLocationsByCity(state, idCity);

  let locationsMap = new Map<string, LocationEntity[]>();
  locations.forEach(location => {
    const key = location.type;
    const data = locationsMap.get(location.type) || [];

    locationsMap.set(key, [...data, { ...location }]);
  });

  let locationsByType: SectionData<LocationEntity[]>[] = [];
  for (let [key, value] of locationsMap) {
    locationsByType.push({
      title: key,
      data: value,
    });
  }

  return locationsByType;
}

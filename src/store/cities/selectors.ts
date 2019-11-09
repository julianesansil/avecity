import { ApplicationState } from '..';
import CityEntity from '~/src/model/CityEntity';
import { getLocation } from '../locations/selectors';

export function selectCities(state: ApplicationState): CityEntity[] {
  const normalizedCities = Object.values(state.cities);

  return normalizedCities.map(normalizedCity => {
    const locations = normalizedCity.locations.map(idLocation =>
      getLocation(state, idLocation),
    );

    return new CityEntity({
      id: normalizedCity.id,
      name: normalizedCity.name,
      countryName: normalizedCity.countryName,
      locations,
      createdAt: normalizedCity.createdAt,
    });
  });
}

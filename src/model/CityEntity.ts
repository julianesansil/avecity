import LocationEntity from './LocationEntity';
import * as types from './types';

class CityEntity {
  id: string;
  name: string;
  countryName: string;
  locations?: LocationEntity[];

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.countryName = data.countryName;
    this.locations = data.locations;
  }
}

export type NormalizedCity = types.Override<
  CityEntity,
  { locations?: string[] }
>;

export default CityEntity;

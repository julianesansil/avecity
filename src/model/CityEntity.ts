import moment from 'moment';

import LocationEntity from './LocationEntity';
import * as types from './types';

class CityEntity {
  id: string;
  name: string;
  countryName: string;
  locations: LocationEntity[];

  createdAt: moment.Moment;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.countryName = data.countryName;
    this.locations = data.locations;

    this.createdAt = data.createdAt;
  }

  getCountryInitials() {
    if (this.countryName)
      return this.countryName.length >= 2
        ? this.countryName.substring(0, 2).toUpperCase()
        : this.countryName.substring(0, 1).toUpperCase();

    return '';
  }
}

export type NormalizedCity = Omit<
  types.Override<CityEntity, { locations: string[] }>,
  'getCountryInitials'
>;

export default CityEntity;

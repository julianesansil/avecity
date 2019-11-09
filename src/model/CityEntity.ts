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
}

export type NormalizedCity = types.Override<
  CityEntity,
  { locations: string[] }
>;

export default CityEntity;

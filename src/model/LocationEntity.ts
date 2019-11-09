import moment from 'moment';

export enum LocationType {
  RESTAURANTE = 'Restaurante',
  RESIDENCIAL = 'Residencial',
  OUTRO = 'Outro',
}

class LocationEntity {
  id: string;
  name: string;
  type: LocationType;
  address: string;
  notes?: string;

  createdAt: moment.Moment;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.address = data.address;
    this.notes = data.notes;

    this.createdAt = data.createdAt;
  }
}

export type NormalizedLocation = LocationEntity;

export default LocationEntity;

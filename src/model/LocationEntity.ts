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

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.address = data.address;
    this.notes = data.notes;
  }
}

export type NormalizedLocation = LocationEntity;

export default LocationEntity;

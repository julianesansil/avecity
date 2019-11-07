export enum LocationType {
  RESTAURANTE = 'Restaurante',
  RESIDENCIAL = 'Residencial',
  OUTRO = 'Outro',
}

class LocationEntity {
  name: string;
  type: LocationType;
  address: string;
  notes: string;

  constructor(data: any) {
    this.name = data.name;
    this.type = data.type;
    this.address = data.address;
    this.notes = data.notes;
  }
}

export default LocationEntity;

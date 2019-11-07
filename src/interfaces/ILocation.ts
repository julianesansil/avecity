export enum LocationType {
  RESTAURANTE = 'Restaurante',
  RESIDENCIAL = 'Residencial',
  OUTRO = 'Outro',
}

interface ILocation {
  name: string;
  type: LocationType;
  address: string;
  notes: string;
}

export default ILocation;

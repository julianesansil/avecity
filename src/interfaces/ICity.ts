import ILocation from './ILocation';

interface ICity {
  name: string;
  countryName: string;
  locations?: ILocation[];
}

export default ICity;

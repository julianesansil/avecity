import LocationEntity from './LocationEntity';

interface CityEntity {
  name: string;
  countryName: string;
  locations?: LocationEntity[];
}

export default CityEntity;

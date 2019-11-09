import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Button, FlatList, SectionList } from 'react-native';
import { Footer, Text } from 'native-base';

import LocationItem from './components/LocationItem';

import SectionData from '~/src/model/SectionData';
import LocationEntity from '~/src/model/LocationEntity';
import CityEntity from '~/src/model/CityEntity';

import { ApplicationState } from '~/src/store';
import * as LocationsSelectores from '~/src/store/locations/selectors';

import { NAVIGATOR_NEW_LOCATION } from '~/src/AppNavigator';
import { string } from 'prop-types';

interface NavigationParams {
  city: CityEntity;
}

function LocationList({
  navigation,
}: NavigationStackScreenProps<NavigationParams>) {
  const city = navigation.getParam('city');

  const locations: LocationEntity[] = useSelector((state: ApplicationState) =>
    LocationsSelectores.selectLocationsByCity(state, city.id),
  );
  const [locationsSection, setLocationsByCity] = useState();

  useEffect(() => {
    setLocationsByCity(groupLocationsByType(locations));
  }, []);

  function groupLocationsByType(
    locations: LocationEntity[],
  ): SectionData<LocationEntity[]>[] {
    let locationsMap = new Map<string, LocationEntity[]>();
    locations.forEach(location => {
      const key = location.type;
      const data = locationsMap.get(location.type) || [];

      locationsMap.set(key, [...data, { ...location }]);
    });

    let locationsByType: SectionData<LocationEntity[]>[] = [];
    for (let [key, value] of locationsMap) {
      locationsByType.push({
        title: key,
        data: value,
      });
    }

    return locationsByType;
  }

  function goNewLocation(idCity: string) {
    navigation.navigate(NAVIGATOR_NEW_LOCATION, {
      idCity,
    });
  }

  function renderLocationItem({ item }: { item: LocationEntity }) {
    return <LocationItem idCity={city.id} location={item} />;
  }

  return (
    <Fragment>
      {!locations.length ? (
        <Text>Sem localidades cadastradas</Text>
      ) : (
        <SectionList
          bounces={false}
          contentContainerStyle={{ margin: 16 }}
          keyExtractor={(item, index) => item + index}
          sections={locationsSection}
          renderItem={renderLocationItem}
          renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
        />
      )}

      <Footer>
        <Button
          title="Cadastrar Localidade"
          onPress={() => goNewLocation(city.id)}
        />
      </Footer>
    </Fragment>
  );
}

LocationList.navigationOptions = ({
  navigation,
}: NavigationStackScreenProps<NavigationParams>) => {
  const city = navigation.getParam('city');
  return { title: city.name, headerBackTitle: null };
};

export default LocationList;

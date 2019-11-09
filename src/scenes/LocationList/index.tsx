import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Button, FlatList } from 'react-native';
import { Container, Content, Footer, Text } from 'native-base';

import LocationItem from './components/LocationItem';

import LocationEntity from '~/src/model/LocationEntity';
import CityEntity from '~/src/model/CityEntity';

import { ApplicationState } from '~/src/store';
import * as LocationsSelectores from '~/src/store/locations/selectors';

import { NAVIGATOR_NEW_LOCATION } from '~/src/AppNavigator';

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
        <FlatList
          keyExtractor={item => item.id}
          data={locations}
          renderItem={renderLocationItem}
          contentContainerStyle={{ margin: 16 }}
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

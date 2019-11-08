import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Button, FlatList } from 'react-native';
import { Container, Content, Footer, Text } from 'native-base';

import LocationItem from './components/LocationItem';

import LocationEntity from '~/src/model/LocationEntity';

import { ApplicationState } from '~/src/store';
import * as LocationsSelectores from '~/src/store/locations/selectors';

import { NAVIGATOR_NEW_LOCATION } from '~/src/AppNavigator';

interface NavigationParams {
  idCity: string;
}

function LocationList({
  navigation,
}: NavigationStackScreenProps<NavigationParams>) {
  const params = navigation.state.params;
  const idCity = params ? params.idCity : '';

  const locations: LocationEntity[] = useSelector((state: ApplicationState) =>
    LocationsSelectores.selectLocationsByCity(state, idCity),
  );

  function goNewLocation(idCity: string, location?: LocationEntity) {
    navigation.navigate(NAVIGATOR_NEW_LOCATION, {
      idCity,
      currentLocation: location,
    });
  }

  function renderLocationItem({ item }: { item: LocationEntity }) {
    return (
      <LocationItem
        idCity={idCity}
        location={item}
        goNewLocation={goNewLocation}
      />
    );
  }

  return (
    <Container>
      <Content padder>
        {!locations.length ? (
          <Text>Sem localidades cadastradas</Text>
        ) : (
          <FlatList
            keyExtractor={item => item.id}
            data={locations}
            renderItem={renderLocationItem}
          />
        )}
      </Content>

      <Footer>
        <Button
          title="Cadastrar Localidade"
          onPress={() => goNewLocation(idCity)}
        />
      </Footer>
    </Container>
  );
}

export default LocationList;

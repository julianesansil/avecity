import React from 'react';
import { useSelector } from 'react-redux';
import { Button, FlatList } from 'react-native';
import { Container, Content, Footer } from 'native-base';

import LocationItem from './components/LocationItem';

import NavigationProps from '~/src/model/NavigationProps';
import LocationEntity from '~/src/model/LocationEntity';

import { ApplicationState } from '~/src/store';
import * as LocationsSelectores from '~/src/store/locations/selectors';
import * as CitiesSelectores from '~/src/store/cities/selectors';

import { NAVIGATOR_NEW_LOCATION } from '~/src/AppNavigator';

function LocationList({ navigation }: NavigationProps) {
  const cities = useSelector((state: ApplicationState) =>
    CitiesSelectores.selectCities(state),
  );
  const locations = useSelector((state: ApplicationState) =>
    LocationsSelectores.selectLocationsByCity(state, cities[0].id),
  );

  function renderLocationItem({ item }: { item: LocationEntity }) {
    return <LocationItem location={item} />;
  }

  return (
    <Container>
      <Content padder>
        {locations && (
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
          onPress={() => navigation.navigate(NAVIGATOR_NEW_LOCATION)}
        />
      </Footer>
    </Container>
  );
}

export default LocationList;

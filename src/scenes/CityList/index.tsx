import React from 'react';
import { useSelector } from 'react-redux';
import { Button, FlatList } from 'react-native';
import { Container, Content, List, Footer, Text } from 'native-base';

import CityItem from './components/CityItem';

import NavigationProps from '~/src/model/NavigationProps';
import CityEntity from '~/src/model/CityEntity';

import { ApplicationState } from '~/src/store';
import * as CitiesSelectores from '~/src/store/cities/selectors';

import {
  NAVIGATOR_NEW_CITY,
  NAVIGATOR_LIST_LOCATION,
} from '~/src/AppNavigator';

function CityList({ navigation }: NavigationProps) {
  const cities: CityEntity[] = useSelector((state: ApplicationState) =>
    CitiesSelectores.selectCities(state),
  );

  function goNewCity() {
    navigation.navigate(NAVIGATOR_NEW_CITY);
  }

  function goLocationList(idCity: string) {
    navigation.navigate(NAVIGATOR_LIST_LOCATION, { idCity });
  }

  function renderCityItem({ item }: { item: CityEntity }) {
    return <CityItem city={item} goLocationList={goLocationList} />;
  }

  return (
    <Container>
      <Content>
        <List>
          {!cities.length ? (
            <Text>Sem cidades cadastradas</Text>
          ) : (
            <FlatList
              keyExtractor={item => item.id}
              data={cities}
              renderItem={renderCityItem}
            />
          )}
        </List>
      </Content>

      <Footer>
        <Button title="Cadastrar Cidade" onPress={goNewCity} />
      </Footer>
    </Container>
  );
}

export default CityList;

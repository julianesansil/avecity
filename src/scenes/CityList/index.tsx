import React from 'react';
import { useSelector } from 'react-redux';
import { Button, FlatList } from 'react-native';
import { Container, Content, List, Footer } from 'native-base';

import CityItem from './components/CityItem';

import INavigationProps from '~/src/interfaces/INavigationProps';
import ICity from '~/src/interfaces/ICity';
import { ApplicationState } from '~/src/store';

import {
  NAVIGATOR_NEW_CITY,
  NAVIGATOR_LIST_LOCATION,
} from '~/src/AppNavigator';

const CityList = ({ navigation }: INavigationProps) => {
  const cities = useSelector((state: ApplicationState) => state.cities);

  function renderCityItem({ item }: { item: ICity }) {
    return <CityItem city={item} />;
  }

  return (
    <Container>
      <Content>
        <List>
          <FlatList
            data={cities}
            renderItem={renderCityItem}
            // keyExtractor={item => item.id}
          />
        </List>
      </Content>

      <Footer>
        <Button
          title="Nova Cidade"
          onPress={() => navigation.navigate(NAVIGATOR_NEW_CITY)}
        />

        <Button
          title="Lista de Localidades"
          onPress={() => navigation.navigate(NAVIGATOR_LIST_LOCATION)}
        />
      </Footer>
    </Container>
  );
};

export default CityList;

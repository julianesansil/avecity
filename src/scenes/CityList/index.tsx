import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Button, FlatList } from 'react-native';
import { Footer, Text, Content } from 'native-base';

import CityItem from './components/CityItem';

import NavigationProps from '~/src/model/NavigationProps';
import CityEntity from '~/src/model/CityEntity';

import { ApplicationState } from '~/src/store';
import * as CitiesSelectores from '~/src/store/cities/selectors';

import { NAVIGATOR_NEW_CITY } from '~/src/AppNavigator';

function CityList({ navigation }: NavigationProps) {
  const cities: CityEntity[] = useSelector((state: ApplicationState) =>
    CitiesSelectores.selectCities(state),
  );

  function goNewCity() {
    navigation.navigate(NAVIGATOR_NEW_CITY);
  }

  function renderCityItem({ item }: { item: CityEntity }) {
    return <CityItem city={item} />;
  }

  return (
    <Fragment>
      {!cities.length ? (
        <Text>Sem cidades cadastradas</Text>
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          data={cities}
          renderItem={renderCityItem}
        />
      )}

      <Footer>
        <Button title="Cadastrar Cidade" onPress={goNewCity} />
      </Footer>
    </Fragment>
  );
}

CityList.navigationOptions = {
  title: 'Cidades',
  headerBackTitle: null,
};

export default CityList;

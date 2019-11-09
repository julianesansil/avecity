import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { Text } from 'native-base';

import AnimatedHomeHeader from '~/src/components/AnimatedHomeHeader';
import FloatingButton from '~/src/components/FloatingButton';
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
      <AnimatedHomeHeader title="Cidades">
        {!cities.length ? (
          <Text style={{}}>Sem cidades cadastradas</Text>
        ) : (
          <FlatList
            bounces={false}
            keyExtractor={item => item.id}
            data={cities}
            renderItem={renderCityItem}
          />
        )}
      </AnimatedHomeHeader>

      <FloatingButton onPress={goNewCity} />
    </Fragment>
  );
}

CityList.navigationOptions = {
  header: null,
  headerBackTitle: null,
};

export default CityList;

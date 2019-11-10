import React, { Fragment } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import AnimatedHomeHeader from '~/src/components/AnimatedHomeHeader';
import FloatingButton from '~/src/components/FloatingButton';
import CityItem from './components/CityItem';
import { SCCentralizedContainer } from '~/src/components/SCContainer';
import { StyledWarningText } from '~/src/components/SCText';

import NavigationProps from '~/src/model/NavigationProps';
import CityEntity from '~/src/model/CityEntity';

import { ApplicationState } from '~/src/store';
import * as CitiesSelectores from '~/src/store/cities/selectors';

import { noHeader } from '~/src/styles/headerStyle';
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
          <SCCentralizedContainer marginTop>
            <StyledWarningText>Sem cidades cadastradas</StyledWarningText>
          </SCCentralizedContainer>
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

CityList.navigationOptions = noHeader;

export default CityList;

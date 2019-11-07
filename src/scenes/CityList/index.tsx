import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button } from 'react-native';

import INavigationProps from '~/src/interfaces/INavigationProps';

import { ApplicationState } from '~/src/store';

import {
  NAVIGATOR_NEW_CITY,
  NAVIGATOR_LIST_LOCATION,
} from '~/src/AppNavigator';

const CityList = ({ navigation }: INavigationProps) => {
  const cities = useSelector((state: ApplicationState) => state.cities);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Cidades</Text>
      <Text>{JSON.stringify(cities)}</Text>

      <Button
        title="Nova Cidade"
        onPress={() => navigation.navigate(NAVIGATOR_NEW_CITY)}
      />

      <Button
        title="Lista de Localidades"
        onPress={() => navigation.navigate(NAVIGATOR_LIST_LOCATION)}
      />
    </View>
  );
};

export default CityList;

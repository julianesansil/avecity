import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button } from 'react-native';

import INavigationProps from '~/src/interfaces/INavigationProps';
import CityEntity from '~/src/entities/CityEntity';

import { ApplicationState } from '~/src/store';
import { addCity } from '~/src/store/city/actions';

import {
  NAVIGATOR_NEW_CITY,
  NAVIGATOR_LIST_LOCATION,
} from '~/src/AppNavigator';

const CityList = ({ navigation }: INavigationProps) => {
  const cities = useSelector((state: ApplicationState) => state.cities);
  const dispatch = useDispatch();

  function _addCity() {
    const city: CityEntity = { name: 'Manaus', countryName: 'Brasil' };
    dispatch(addCity(city));
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Cidades</Text>
      <Text>{JSON.stringify(cities)}</Text>

      <Button title="Adicionar Cidade" onPress={_addCity} />

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

import React from 'react';
import { View, Text, Button } from 'react-native';

import INavigationProps from '~/src/interfaces/INavigationProps';
import {
  NAVIGATOR_NEW_CITY,
  NAVIGATOR_LIST_LOCATION,
} from '~/src/AppNavigator';

const CityList = ({ navigation }: INavigationProps) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Cidades</Text>

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

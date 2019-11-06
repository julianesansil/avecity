import React from 'react';
import { View, Text, Button } from 'react-native';

import INavigationProps from '~/src/interfaces/INavigationProps';
import { NAVIGATOR_NEW_LOCATION } from '~/src/AppNavigator';

const LocationList = ({ navigation }: INavigationProps) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Localidades</Text>

      <Button
        title="Nova Localidade"
        onPress={() => navigation.navigate(NAVIGATOR_NEW_LOCATION)}
      />
    </View>
  );
};

export default LocationList;

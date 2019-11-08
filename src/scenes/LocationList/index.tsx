import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Button } from 'react-native';

import NavigationProps from '~/src/model/NavigationProps';

import { ApplicationState } from '~/src/store';

import { NAVIGATOR_NEW_LOCATION } from '~/src/AppNavigator';

function LocationList({ navigation }: NavigationProps) {
  const locations = useSelector((state: ApplicationState) => state.locations);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Localidades</Text>
      <Text>{JSON.stringify(locations)}</Text>

      <Button
        title="Nova Localidade"
        onPress={() => navigation.navigate(NAVIGATOR_NEW_LOCATION)}
      />
    </View>
  );
}

export default LocationList;

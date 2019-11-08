import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Button } from 'react-native';
import { Form, Item, Input, Label, Text } from 'native-base';

import LocationEntity, { LocationType } from '~/src/model/LocationEntity';

import * as LocationsActions from '~/src/store/locations/actions';

interface NavigationParams {
  idCity: string;
  currentLocation: LocationEntity;
}

function NewLocation({
  navigation,
}: NavigationStackScreenProps<NavigationParams>) {
  const params = navigation.state.params;
  const idCity = params ? params.idCity : '';
  const currentLocation = params ? params.currentLocation : undefined;

  const dispatch = useDispatch();
  const [location, setLocation] = useState<LocationEntity>(
    currentLocation ? currentLocation : new LocationEntity({}),
  );

  function addLocation(idCity: string, newLocation: LocationEntity) {
    dispatch(LocationsActions.addLocation(idCity, newLocation));
  }

  function editLocation(newLocation: LocationEntity) {
    dispatch(LocationsActions.editLocation(newLocation));
  }

  return (
    <Form>
      <Text>{JSON.stringify(currentLocation)}</Text>
      <Item floatingLabel>
        <Label>Nome</Label>
        <Input
          value={location.name}
          onChangeText={text => setLocation({ ...location, name: text })}
        />
      </Item>

      <Item floatingLabel>
        <Label>Tipo</Label>
        <Input
          value={location.type}
          onChangeText={text =>
            setLocation({ ...location, type: LocationType.RESIDENCIAL })
          }
        />
      </Item>

      <Item floatingLabel>
        <Label>Endereço</Label>
        <Input
          value={location.address}
          onChangeText={text => setLocation({ ...location, address: text })}
        />
      </Item>

      <Item floatingLabel last>
        <Label>Notas</Label>
        <Input
          value={location.notes}
          onChangeText={text => setLocation({ ...location, notes: text })}
        />
      </Item>

      <Button
        title="Cadastrar Localidade"
        onPress={() => addLocation(idCity, location)}
      />
      <Button
        title="Editar Localidade"
        onPress={() => editLocation(location)}
      />
    </Form>
  );
}

export default NewLocation;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Button } from 'react-native';
import { Form, Item, Input, Label, Text, Picker } from 'native-base';

import LocationEntity, { LocationType } from '~/src/model/LocationEntity';

import * as LocationsActions from '~/src/store/locations/actions';

interface NavigationParams {
  idCity: string;
  currentLocation: LocationEntity;
}

function NewLocation({
  navigation,
}: NavigationStackScreenProps<NavigationParams>) {
  const idCity = navigation.getParam('idCity');
  const currentLocation = navigation.getParam('currentLocation');

  const dispatch = useDispatch();
  const [location, setLocation] = useState<LocationEntity>(
    currentLocation || new LocationEntity({}),
  );

  function addLocation(idCity: string, newLocation: LocationEntity) {
    dispatch(LocationsActions.addLocation(idCity, newLocation));
    navigation.goBack();
  }

  function editLocation(newLocation: LocationEntity) {
    dispatch(LocationsActions.editLocation(newLocation));
    navigation.goBack();
  }

  return (
    <Form>
      <Item fixedLabel>
        <Label>Nome</Label>
        <Input
          value={location.name}
          onChangeText={text => setLocation({ ...location, name: text })}
        />
      </Item>

      <Item picker fixedLabel>
        <Label>Tipo</Label>
        <Picker
          mode="dropdown"
          // iosIcon={<Icon name="arrow-down" />}
          style={{ width: undefined }}
          placeholder="Selecione o tipo"
          placeholderStyle={{ color: '#bfc6ea' }}
          placeholderIconColor="#007aff"
          // selectedValue={this.state.selected2}
          // onValueChange={this.onValueChange2.bind(this)}
        >
          <Picker.Item label="Wallet" value="key0" />
          <Picker.Item label="ATM Card" value="key1" />
          <Picker.Item label="Debit Card" value="key2" />
          <Picker.Item label="Credit Card" value="key3" />
          <Picker.Item label="Net Banking" value="key4" />
        </Picker>
      </Item>

      <Item fixedLabel>
        <Label>Endereço</Label>
        <Input
          value={location.address}
          onChangeText={text => setLocation({ ...location, address: text })}
        />
      </Item>

      <Item fixedLabel last>
        <Label>Notas</Label>
        <Input
          value={location.notes}
          onChangeText={text => setLocation({ ...location, notes: text })}
        />
      </Item>

      {!location.id ? (
        <Button
          title="Cadastrar Localidade"
          onPress={() => addLocation(idCity, location)}
        />
      ) : (
        <Button
          title="Editar Localidade"
          onPress={() => editLocation(location)}
        />
      )}
    </Form>
  );
}

NewLocation.navigationOptions = {
  title: 'Localidade',
};

export default NewLocation;

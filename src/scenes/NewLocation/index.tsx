import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Button } from 'react-native';
import { Form, Item, Input, Label, Picker, Icon } from 'native-base';

import FormInput from '~/src/components/FormInput';
import FormPicker from '~/src/components/FormPicker';

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
  const [isValidForm, setIsValidForm] = useState<boolean>(false);

  useEffect(() => {
    setIsValidForm(
      location.name && location.type && location.address ? true : false,
    );
  }, [location]);

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
      <FormInput
        label="Nome"
        value={location.name}
        onChangeText={text => setLocation({ ...location, name: text })}
      />

      <FormPicker
        label="Tipo"
        placeholder="Selecione o tipo"
        selectedValue={location.type}
        onValueChange={(text: LocationType) =>
          setLocation({ ...location, type: text })
        }>
        <Picker.Item
          label={LocationType.RESTAURANT}
          value={LocationType.RESTAURANT}
        />

        <Picker.Item
          label={LocationType.RESIDENTIAL}
          value={LocationType.RESIDENTIAL}
        />

        <Picker.Item label={LocationType.OTHER} value={LocationType.OTHER} />
      </FormPicker>

      <FormInput
        label="Endereço"
        value={location.address}
        onChangeText={text => setLocation({ ...location, address: text })}
      />

      <FormInput
        label="Notas"
        value={location.notes}
        onChangeText={text => setLocation({ ...location, notes: text })}
      />

      {!location.id ? (
        <Button
          disabled={!isValidForm}
          title="Cadastrar Localidade"
          onPress={() => addLocation(idCity, location)}
        />
      ) : (
        <Button
          disabled={!isValidForm}
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

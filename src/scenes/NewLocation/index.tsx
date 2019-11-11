import React, { useState, useEffect } from 'react';
import { Picker } from 'native-base';
import { useDispatch } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import styled from 'styled-components/native';

import FormKeyboardAvoiding from '~/src/components/FormKeyboardAvoiding';
import FormInput, { FormTextArea } from '~/src/components/FormInput';
import FormPicker from '~/src/components/FormPicker';
import FormButton from '~/src/components/FormButton';
import { SCSafeContainer } from '~/src/components/SCContainer';

import LocationEntity, { LocationType } from '~/src/model/LocationEntity';
import * as LocationsActions from '~/src/store/locations/actions';
import { getLocationAndAddress } from '~/src/helpers/placesHelper';

import baseHeader from '~/src/styles/headerStyle';
import { NAVIGATOR_PLACE_SEARCH } from '~/src/AppNavigator';

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
    currentLocation || new LocationEntity({ type: LocationType.OTHER }),
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

  function onPlaceSelected(data: any) {
    const locationAndAddress = getLocationAndAddress(data);
    setLocation({
      ...location,
      name: locationAndAddress.locationName,
      address: locationAndAddress.address,
    });
  }

  function goPlacesSearch() {
    navigation.navigate(NAVIGATOR_PLACE_SEARCH, {
      type: 'establishment',
      onPlaceSelected,
    });
  }

  return (
    <SCSafeContainer>
      <FormKeyboardAvoiding>
        <SCForm>
          <FormInput
            label="Nome"
            value={location.name}
            onChangeText={text => setLocation({ ...location, name: text })}
            onFocus={goPlacesSearch}
          />

          <FormPicker
            label="Tipo"
            // placeholder="Selecione o tipo"
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
            <Picker.Item
              label={LocationType.OTHER}
              value={LocationType.OTHER}
            />
          </FormPicker>

          <FormInput
            label="Endereço"
            value={location.address}
            onChangeText={text => setLocation({ ...location, address: text })}
          />

          <FormTextArea
            label="Notas"
            value={location.notes}
            onChangeText={text => setLocation({ ...location, notes: text })}
          />

          {!location.id ? (
            <FormButton
              disabled={!isValidForm}
              title="CADASTRAR"
              onPress={() => addLocation(idCity, location)}
            />
          ) : (
            <FormButton
              disabled={!isValidForm}
              title="EDITAR"
              onPress={() => editLocation(location)}
            />
          )}
        </SCForm>
      </FormKeyboardAvoiding>
    </SCSafeContainer>
  );
}

const SCForm = styled.View`
  margin-top: 100;
  padding-horizontal: 16;
`;

NewLocation.navigationOptions = {
  title: 'Localidade',
  ...baseHeader,
};

export default NewLocation;

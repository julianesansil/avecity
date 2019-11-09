import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { Picker, Button } from 'native-base';

import FormInput from '~/src/components/FormInput';
import FormTextArea from '~/src/components/FormTextArea';
import FormPicker from '~/src/components/FormPicker';
import { StyledTitle } from '~/src/components/StyledText';

import LocationEntity, { LocationType } from '~/src/model/LocationEntity';

import * as LocationsActions from '~/src/store/locations/actions';
import { fonts, colors } from '~/src/styles/theme';

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
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({
          ios: 'padding',
          android: undefined,
        })}
        keyboardVerticalOffset={100}>
        <ScrollView bounces={false}>
          <View style={{ paddingHorizontal: 16, marginTop: 100 }}>
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
              <Button
                block
                disabled={!isValidForm}
                style={{
                  marginTop: 50,
                  backgroundColor: colors.ORANGE,
                  opacity: isValidForm ? 1 : 0.4,
                }}
                onPress={() => addLocation(idCity, location)}>
                <StyledTitle style={{ color: colors.WHITE }}>
                  CADASTRAR
                </StyledTitle>
              </Button>
            ) : (
              <Button
                block
                disabled={!isValidForm}
                style={{
                  marginTop: 50,
                  backgroundColor: colors.ORANGE,
                  opacity: isValidForm ? 1 : 0.4,
                }}
                onPress={() => editLocation(location)}>
                <StyledTitle style={{ color: colors.WHITE }}>
                  EDITAR
                </StyledTitle>
              </Button>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

NewLocation.navigationOptions = {
  title: 'Localidade',
  headerStyle: {
    backgroundColor: colors.PURPLE,
  },
  headerTintColor: colors.WHITE,
  headerTitleStyle: {
    fontFamily: fonts.MEDIUM,
    fontSize: 20,
  },
};

export default NewLocation;

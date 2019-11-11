import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { fonts, colors } from '~/src/styles/theme';
import baseHeader from '~/src/styles/headerStyle';

interface NavigationParams {
  type?: 'city' | 'establishment';
  onPlaceSelected: (data: any) => void;
}

function PlaceSearch({
  navigation,
}: NavigationStackScreenProps<NavigationParams>) {
  const type = navigation.getParam('type');
  const onPlaceSelected = navigation.getParam('onPlaceSelected');

  function onPress(data: any) {
    onPlaceSelected(data);
    navigation.goBack();
  }

  return (
    <GooglePlacesAutocomplete
      query={{
        key: 'AIzaSyDDQBRr6khSXUiBuNOMPrIawjQHoDVMkUo',
        language: 'pt',
        types: type === 'city' ? '(cities)' : 'establishment',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      GooglePlacesSearchQuery={{
        rankby: 'distance',
      }}
      returnKeyType={'search'}
      getDefaultValue={() => ''}
      placeholder={
        type === 'city' ? 'Pesquise uma cidade' : 'Pesquise uma localidade'
      }
      onPress={(data: any) => onPress(data)}
      onSubmitEditing={(data: any) => onPress(data)}
      onNotFound={(data: any) => onPress(data)}
      debounce={200}
      minLength={2}
      autoFocus={true}
      fetchDetails={true}
      styles={styles}
    />
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    width: '100%',
    backgroundColor: colors.LIGHT_GRAY,
  },

  textInput: {
    height: 39,
    marginTop: 2,
    marginLeft: 2,
    marginRight: 2,

    fontFamily: fonts.MEDIUM,
    fontSize: Platform.select({ ios: 15, android: 13.5 }),
    color: colors.DARK_GRAY,
  },

  description: {
    fontFamily: fonts.MEDIUM,
    fontSize: Platform.select({ ios: 15, android: 13.5 }),
    color: colors.LIGHT_GRAY,
  },
});

PlaceSearch.navigationOptions = {
  title: 'Pesquise',
  ...baseHeader,
};

export default PlaceSearch;

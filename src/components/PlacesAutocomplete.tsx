import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { fonts, colors } from '../styles/theme';

interface Props {
  // onPress: string;
}

function PlacesAutocomplete(props: Props) {
  return (
    <GooglePlacesAutocomplete
      query={{
        key: 'AIzaSyDDQBRr6khSXUiBuNOMPrIawjQHoDVMkUo',
        language: 'pt',
        types: '(cities)',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      GooglePlacesSearchQuery={{
        rankby: 'distance',
      }}
      returnKeyType={'search'}
      getDefaultValue={() => ''}
      placeholder="Pesquise uma cidade"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.table(data, details);
      }}
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

export default PlacesAutocomplete;

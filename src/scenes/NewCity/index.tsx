import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { Button } from 'native-base';

import FormInput from '~/src/components/FormInput';
import { StyledTitle } from '~/src/components/StyledText';

import NavigationProps from '~/src/model/NavigationProps';
import CityEntity from '~/src/model/CityEntity';

import * as CityActions from '~/src/store/cities/actions';

import { fonts, colors } from '~/src/styles/theme';

function NewCity({ navigation }: NavigationProps) {
  const dispatch = useDispatch();
  const [city, setCity] = useState<CityEntity>(new CityEntity({}));
  const [isValidForm, setIsValidForm] = useState<boolean>(false);

  useEffect(() => {
    setIsValidForm(city.name && city.countryName ? true : false);
  }, [city]);

  function addCity(newCity: CityEntity) {
    dispatch(CityActions.addCity(newCity));
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
              label="Nome da cidade"
              onChangeText={text => setCity({ ...city, name: text })}
            />

            <FormInput
              label="Nome do país"
              onChangeText={text => setCity({ ...city, countryName: text })}
            />

            <Button
              block
              disabled={!isValidForm}
              style={{
                marginTop: 50,
                backgroundColor: colors.ORANGE,
                opacity: isValidForm ? 1 : 0.4,
              }}
              onPress={() => addCity(city)}>
              <StyledTitle style={{ color: colors.WHITE }}>
                CADASTRAR
              </StyledTitle>
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

NewCity.navigationOptions = {
  title: 'Cidade',
  headerStyle: {
    backgroundColor: colors.PURPLE,
  },
  headerTintColor: colors.WHITE,
  headerTitleStyle: {
    fontFamily: fonts.MEDIUM,
    fontSize: 20,
  },
};

export default NewCity;

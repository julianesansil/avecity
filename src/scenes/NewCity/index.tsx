import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import FormKeyboardAvoiding from '~/src/components/FormKeyboardAvoiding';
import FormInput from '~/src/components/FormInput';
import FormButton from '~/src/components/FormButton';
import { SCSafeContainer } from '~/src/components/SCContainer';

import NavigationProps from '~/src/model/NavigationProps';
import CityEntity from '~/src/model/CityEntity';

import * as CityActions from '~/src/store/cities/actions';
import { getCityAndCountry } from '~/src/helpers/placesHelper';

import baseHeader from '~/src/styles/headerStyle';
import { NAVIGATOR_PLACE_SEARCH } from '~/src/AppNavigator';

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

  function onPlaceSelected(data: any) {
    const cityAndCountry = getCityAndCountry(data);
    setCity({
      ...city,
      name: cityAndCountry.cityName,
      countryName: cityAndCountry.countryName,
    });
  }

  function goPlacesSearch() {
    navigation.navigate(NAVIGATOR_PLACE_SEARCH, {
      type: 'city',
      onPlaceSelected,
    });
  }

  return (
    <SCSafeContainer>
      <FormKeyboardAvoiding>
        <SCForm>
          <FormInput
            label="Nome da cidade"
            value={city.name}
            onChangeText={text => setCity({ ...city, name: text })}
            onFocus={goPlacesSearch}
          />

          <FormInput
            label="Nome do país"
            value={city.countryName}
            onChangeText={text => setCity({ ...city, countryName: text })}
          />

          <FormButton
            disabled={!isValidForm}
            title="CADASTRAR"
            onPress={() => addCity(city)}
          />
        </SCForm>
      </FormKeyboardAvoiding>
    </SCSafeContainer>
  );
}

const SCForm = styled.View`
  margin-top: 100;
  padding-horizontal: 16;
`;

NewCity.navigationOptions = {
  title: 'Cidade',
  ...baseHeader,
};

export default NewCity;

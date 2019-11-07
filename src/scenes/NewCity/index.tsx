import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

import ICity from '~/src/interfaces/ICity';

import * as CityActions from '~/src/store/city/actions';

const NewCity = () => {
  const dispatch = useDispatch();
  const [cityName, onChangeCityName] = useState('Useless Placeholder');
  const [countryName, onChangeCountryName] = useState('Useless Placeholder');

  function addCity(cityName: string, countryName: string) {
    const city: ICity = { name: cityName, countryName };
    dispatch(CityActions.addCity(city));
  }

  return (
    <Form>
      <Item floatingLabel>
        <Label>Nome da cidade</Label>
        <Input onChangeText={text => onChangeCityName(text)} />
      </Item>

      <Item floatingLabel last>
        <Label>Nome do país</Label>
        <Input onChangeText={text => onChangeCountryName(text)} />
      </Item>

      <Button
        title="Adicionar Cidade"
        onPress={() => addCity(cityName, countryName)}
      />
    </Form>
  );
};

export default NewCity;

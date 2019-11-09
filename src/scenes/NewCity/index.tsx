import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

import FormInput from '~/src/components/FormInput';

import NavigationProps from '~/src/model/NavigationProps';
import CityEntity from '~/src/model/CityEntity';

import * as CityActions from '~/src/store/cities/actions';

function NewCity({ navigation }: NavigationProps) {
  const dispatch = useDispatch();
  const [city, setCity] = useState<CityEntity>(new CityEntity({}));

  function addCity(newCity: CityEntity) {
    dispatch(CityActions.addCity(newCity));
    navigation.goBack();
  }

  return (
    <Form>
      <FormInput
        label="Nome da cidade"
        onChangeText={text => setCity({ ...city, name: text })}
      />

      <FormInput
        label="Nome do país"
        onChangeText={text => setCity({ ...city, countryName: text })}
      />

      <Button title="Adicionar Cidade" onPress={() => addCity(city)} />
    </Form>
  );
}

NewCity.navigationOptions = {
  title: 'Cidade',
};

export default NewCity;

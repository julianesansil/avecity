import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

import CityEntity from '~/src/model/CityEntity';

import * as CityActions from '~/src/store/cities/actions';

function NewCity() {
  const dispatch = useDispatch();
  const [city, setCity] = useState<CityEntity>(new CityEntity({}));

  function addCity(newCity: CityEntity) {
    dispatch(CityActions.addCity(newCity));
  }

  return (
    <Form>
      <Item floatingLabel>
        <Label>Nome da cidade</Label>
        <Input onChangeText={text => setCity({ ...city, name: text })} />
      </Item>

      <Item floatingLabel last>
        <Label>Nome do país</Label>
        <Input onChangeText={text => setCity({ ...city, countryName: text })} />
      </Item>

      <Button title="Adicionar Cidade" onPress={() => addCity(city)} />
    </Form>
  );
}

export default NewCity;
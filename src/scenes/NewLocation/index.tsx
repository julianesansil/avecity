import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

import ILocation, { LocationType } from '~/src/model/LocationEntity';

import { ApplicationState } from '~/src/store';
import * as LocationsActions from '~/src/store/locations/actions';
import * as CitiesSelectores from '~/src/store/cities/selectors';

function NewLocation() {
  const dispatch = useDispatch();
  const cities = useSelector((state: ApplicationState) =>
    CitiesSelectores.selectCities(state),
  );
  const [location, setLocation] = useState<ILocation>(new ILocation({}));

  function addLocation(newLocation: ILocation) {
    dispatch(LocationsActions.addLocation(cities[0].id, newLocation));
  }

  return (
    <Form>
      <Item floatingLabel>
        <Label>Nome</Label>
        <Input
          onChangeText={text => setLocation({ ...location, name: text })}
        />
      </Item>

      <Item floatingLabel>
        <Label>Tipo</Label>
        <Input
          onChangeText={text =>
            setLocation({ ...location, type: LocationType.RESIDENCIAL })
          }
        />
      </Item>

      <Item floatingLabel>
        <Label>Endereço</Label>
        <Input
          onChangeText={text => setLocation({ ...location, address: text })}
        />
      </Item>

      <Item floatingLabel last>
        <Label>Notas</Label>
        <Input
          onChangeText={text => setLocation({ ...location, notes: text })}
        />
      </Item>

      <Button title="Adicionar Cidade" onPress={() => addLocation(location)} />
    </Form>
  );
}

export default NewLocation;

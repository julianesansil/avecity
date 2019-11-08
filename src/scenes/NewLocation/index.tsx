import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

import LocationEntity, { LocationType } from '~/src/model/LocationEntity';

import { ApplicationState } from '~/src/store';
import * as LocationsActions from '~/src/store/locations/actions';
import * as LocationsSelectores from '~/src/store/locations/selectors';
import * as CitiesSelectores from '~/src/store/cities/selectors';

function NewLocation() {
  const dispatch = useDispatch();
  const cities = useSelector((state: ApplicationState) =>
    CitiesSelectores.selectCities(state),
  );
  const locations = useSelector((state: ApplicationState) =>
    LocationsSelectores.selectLocationsByCity(state, cities[0].id),
  );
  const [location, setLocation] = useState<LocationEntity>(
    new LocationEntity({}),
  );

  function addLocation(newLocation: LocationEntity) {
    dispatch(LocationsActions.addLocation(cities[0].id, newLocation));
  }

  function editLocation(newLocation: LocationEntity) {
    newLocation.id = locations[0].id;

    dispatch(LocationsActions.editLocation(newLocation));
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

      <Button title="Cadastrar Cidade" onPress={() => addLocation(location)} />
      <Button title="Editar Cidade" onPress={() => editLocation(location)} />
    </Form>
  );
}

export default NewLocation;

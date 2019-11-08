import React from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, Button } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';

import LocationEntity from '~/src/model/LocationEntity';

import * as LocationsActions from '~/src/store/locations/actions';

interface Props {
  idCity: string;
  location: LocationEntity;
  goNewLocation: (idCity: string, location: LocationEntity) => void;
}

function LocationItem({ idCity, location, goNewLocation }: Props) {
  const dispatch = useDispatch();

  function removeLocation(idLocation: string, idCity: string) {
    dispatch(LocationsActions.removeLocation(idLocation, idCity));
  }

  return (
    <TouchableOpacity onPress={() => goNewLocation(idCity, location)}>
      <Card>
        <CardItem header bordered>
          <Text>{location.name}</Text>
        </CardItem>

        <CardItem bordered>
          <Body>
            <Text>{location.address}</Text>
            <Text>{location.notes}</Text>
          </Body>
        </CardItem>

        <CardItem footer bordered>
          <Button
            title="Editar Localidade"
            onPress={() => goNewLocation(idCity, location)}
          />

          <Button
            title="Remover Localidade"
            onPress={() => removeLocation(location.id, idCity)}
          />
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

export default LocationItem;

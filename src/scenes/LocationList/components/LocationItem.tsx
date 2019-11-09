import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { TouchableOpacity, Button } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';

import PeriodToNow from '~/src/components/PeriodToNow';

import LocationEntity from '~/src/model/LocationEntity';

import * as LocationsActions from '~/src/store/locations/actions';

import { NAVIGATOR_NEW_LOCATION } from '~/src/AppNavigator';

interface Props {
  idCity: string;
  location: LocationEntity;
}

function LocationItem({ idCity, location }: Props) {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  function removeLocation(idLocation: string, idCity: string) {
    dispatch(LocationsActions.removeLocation(idLocation, idCity));
  }

  function goNewLocation(idCity: string, location: LocationEntity) {
    navigate(NAVIGATOR_NEW_LOCATION, {
      idCity,
      currentLocation: location,
    });
  }

  return (
    <Card>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => goNewLocation(idCity, location)}>
        <CardItem header bordered>
          <Text style={{ fontFamily: 'Raleway-Regular', color: '#6f42c1' }}>
            {location.name}
          </Text>
          <PeriodToNow date={location.createdAt} />
        </CardItem>

        <CardItem bordered>
          <Body>
            <Text>{location.address}</Text>
            <Text>{location.notes}</Text>
          </Body>
        </CardItem>
      </TouchableOpacity>

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
  );
}

export default LocationItem;

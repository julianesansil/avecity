import React from 'react';
import { Card, CardItem, Text, Body } from 'native-base';

import LocationEntity from '~/src/model/LocationEntity';

interface Props {
  location: LocationEntity;
}

function LocationItem({ location }: Props) {
  return (
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
    </Card>
  );
}

export default LocationItem;

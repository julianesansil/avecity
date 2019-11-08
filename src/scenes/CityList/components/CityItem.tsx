import React from 'react';
import { ListItem, Left, Body, Right, Text } from 'native-base';

import CityEntity from '~/src/model/CityEntity';

interface Props {
  city: CityEntity;
  goLocationList: (idCity: string) => void;
}

function CityItem({ city, goLocationList }: Props) {
  return (
    <ListItem avatar button onPress={() => goLocationList(city.id)}>
      <Left>
        <Text>{city.countryName.substring(0, 2).toUpperCase()}</Text>
      </Left>

      <Body>
        <Text>{city.name}</Text>
        <Text note>{city.countryName}</Text>
      </Body>

      <Right>
        <Text note>3:43 pm</Text>
      </Right>
    </ListItem>
  );
}

export default CityItem;

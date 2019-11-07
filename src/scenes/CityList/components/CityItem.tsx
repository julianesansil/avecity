import React from 'react';
import { ListItem, Left, Body, Right, Text } from 'native-base';

import ICity from '~/src/interfaces/ICity';

interface Props {
  city: ICity;
}

const CityItem = ({ city }: Props) => {
  return (
    <ListItem avatar>
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
};

export default CityItem;

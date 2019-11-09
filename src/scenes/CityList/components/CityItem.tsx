import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { ListItem, Left, Body, Right, Text } from 'native-base';

import PeriodToNow from '~/src/components/PeriodToNow';

import CityEntity from '~/src/model/CityEntity';

import { NAVIGATOR_LIST_LOCATION } from '~/src/AppNavigator';

interface Props {
  city: CityEntity;
}

function CityItem({ city }: Props) {
  const { navigate } = useNavigation();

  function goLocationList(city: CityEntity) {
    navigate(NAVIGATOR_LIST_LOCATION, { city });
  }

  return (
    <ListItem avatar button onPress={() => goLocationList(city)}>
      <Left>
        <Text>{city.getCountryInitials()}</Text>
      </Left>

      <Body>
        <Text>{city.name}</Text>
        <Text note>{city.countryName}</Text>
      </Body>

      <Right>
        <PeriodToNow date={city.createdAt} />
      </Right>
    </ListItem>
  );
}

export default CityItem;

import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { ListItem, Left, Body, Right } from 'native-base';

import PeriodToNow from '~/src/components/PeriodToNow';
import {
  StyledTitle,
  StyledSubtitle,
  StyledBadgeText,
} from '~/src/components/StyledText';
import StyledBadge from '~/src/components/StyledBadge';

import CityEntity from '~/src/model/CityEntity';

import { NAVIGATOR_LIST_LOCATION } from '~/src/AppNavigator';

interface Props {
  city: CityEntity;
}

function CityItem({ city }: Props) {
  const { navigate } = useNavigation();

  function getCountryInitials(countryName: string) {
    if (countryName)
      return countryName.length >= 2
        ? countryName.substring(0, 2).toUpperCase()
        : countryName.substring(0, 1).toUpperCase();

    return '';
  }

  function goLocationList(city: CityEntity) {
    navigate(NAVIGATOR_LIST_LOCATION, { city });
  }

  return (
    <ListItem
      avatar
      button
      style={{ paddingVertical: 2 }}
      onPress={() => goLocationList(city)}>
      <Left>
        <StyledBadge>
          <StyledBadgeText>
            {getCountryInitials(city.countryName)}
          </StyledBadgeText>
        </StyledBadge>
      </Left>

      <Body style={{ paddingLeft: 5, paddingBottom: 12 }}>
        <StyledTitle>{city.name}</StyledTitle>
        <StyledSubtitle>{city.countryName}</StyledSubtitle>
      </Body>

      <Right style={{ paddingBottom: 12 }}>
        <PeriodToNow date={city.createdAt} />
      </Right>
    </ListItem>
  );
}

export default CityItem;

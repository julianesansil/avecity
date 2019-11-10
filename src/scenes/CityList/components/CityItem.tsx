import React from 'react';
import { ListItem, Left, Body, Right } from 'native-base';
import { useNavigation } from 'react-navigation-hooks';
import styled from 'styled-components/native';

import PeriodToNow from '~/src/components/PeriodToNow';
import SCText, { SCTitle, StyledBadgeText } from '~/src/components/SCText';
import SCBadge from '~/src/components/SCBadge';

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
    <SCListItem avatar button onPress={() => goLocationList(city)}>
      <Left>
        <SCBadge>
          <StyledBadgeText>
            {getCountryInitials(city.countryName)}
          </StyledBadgeText>
        </SCBadge>
      </Left>

      <SCBody>
        <SCTitle>{city.name}</SCTitle>
        <SCSubtitle>{city.countryName}</SCSubtitle>
      </SCBody>

      <SCRight>
        <PeriodToNow date={city.createdAt} />
      </SCRight>
    </SCListItem>
  );
}

const SCListItem = styled(ListItem)`
  padding-vertical: 2;
`;

const SCBody = styled(Body)`
  padding-left: 5;
  padding-bottom: 12;
`;

const SCRight = styled(Right)`
  padding-bottom: 12;
`;

const SCSubtitle = styled(SCText)`
  margin-top: 4;
`;

export default CityItem;

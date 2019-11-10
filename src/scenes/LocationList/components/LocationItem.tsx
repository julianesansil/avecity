import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import { useNavigation } from 'react-navigation-hooks';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import PeriodToNow from '~/src/components/PeriodToNow';
import LocationInfoItem from './LocationInfoItem';
import { SCTitle, StyledLinkButtonText } from '~/src/components/SCText';

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
    <Card style={{ flex: 1 }}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => goNewLocation(idCity, location)}>
        <SCBody>
          <SCBodyHeader>
            <SCTitle style={{ flex: 0.8 }}>{location.name}</SCTitle>
            <PeriodToNow date={location.createdAt} />
          </SCBodyHeader>

          <LocationInfoItem first nameIcon="pin" infoText={location.address} />
          {location.notes && (
            <LocationInfoItem
              padding
              nameIcon="text"
              infoText={location.notes}
            />
          )}
        </SCBody>
      </TouchableOpacity>

      <SCFooter bordered footer>
        <SCButton
          first
          transparent
          onPress={() => goNewLocation(idCity, location)}>
          <StyledLinkButtonText>EDITAR</StyledLinkButtonText>
        </SCButton>

        <SCButton
          transparent
          onPress={() => removeLocation(location.id, idCity)}>
          <StyledLinkButtonText>REMOVER</StyledLinkButtonText>
        </SCButton>
      </SCFooter>
    </Card>
  );
}

const SCBody = styled.View`
  padding-vertical: 14;
  padding-horizontal: 14;
`;

const SCFooter = styled(CardItem)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const SCBodyHeader = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SCButton = styled(Button)`
  height: ${Platform.select({ ios: 26, android: 22 })};
  margin-left: ${(props: { first?: boolean }) => (props.first ? 0 : 15)};
`;

export default LocationItem;

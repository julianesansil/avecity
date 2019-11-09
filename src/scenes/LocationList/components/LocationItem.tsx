import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { TouchableOpacity, Platform } from 'react-native';
import { Card, CardItem, Text, Body, Button, View, Icon } from 'native-base';

import PeriodToNow from '~/src/components/PeriodToNow';
import StyledText, {
  StyledButtonText,
  StyledTitle,
} from '~/src/components/StyledText';

import LocationEntity from '~/src/model/LocationEntity';

import * as LocationsActions from '~/src/store/locations/actions';

import { NAVIGATOR_NEW_LOCATION } from '~/src/AppNavigator';
import { colors } from '~/src/styles/theme';

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
        <View style={{ padding: 14 }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <StyledTitle style={{ flex: 0.8 }}>{location.name}</StyledTitle>
            <PeriodToNow date={location.createdAt} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}>
            <Icon
              name="pin"
              style={{ fontSize: 15, color: colors.PURPLE, paddingTop: 9 }}
            />
            <StyledText style={{ marginTop: 8, marginLeft: 10 }}>
              {location.address}
            </StyledText>
          </View>

          {location.notes && (
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <Icon
                name="text"
                style={{ fontSize: 15, color: colors.PURPLE, paddingTop: 10 }}
              />
              <StyledText style={{ marginTop: 8, marginLeft: 10 }}>
                {location.notes}
              </StyledText>
            </View>
          )}
        </View>
      </TouchableOpacity>

      <CardItem footer bordered style={{ flex: 1 }}>
        <View
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Button
            transparent
            style={{ height: Platform.select({ ios: 25, android: 22 }) }}
            onPress={() => goNewLocation(idCity, location)}>
            <StyledButtonText>EDITAR</StyledButtonText>
          </Button>

          <Button
            transparent
            style={{
              height: Platform.select({ ios: 25, android: 22 }),
              marginLeft: 15,
            }}
            onPress={() => removeLocation(location.id, idCity)}>
            <StyledButtonText>REMOVER</StyledButtonText>
          </Button>
        </View>
      </CardItem>
    </Card>
  );
}

export default LocationItem;

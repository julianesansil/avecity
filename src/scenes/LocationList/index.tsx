import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { SectionList, SectionListData, SafeAreaView, View } from 'react-native';
import { Text } from 'native-base';

import FloatingButton from '~/src/components/FloatingButton';
import LocationItem from './components/LocationItem';
import { StyledSectionTitle } from '~/src/components/StyledText';

import SectionData from '~/src/model/SectionData';
import LocationEntity from '~/src/model/LocationEntity';
import CityEntity from '~/src/model/CityEntity';

import { ApplicationState } from '~/src/store';
import * as LocationsSelectores from '~/src/store/locations/selectors';

import { fonts, colors } from '~/src/styles/theme';
import { NAVIGATOR_NEW_LOCATION } from '~/src/AppNavigator';

interface NavigationParams {
  city: CityEntity;
}

function LocationList({
  navigation,
}: NavigationStackScreenProps<NavigationParams>) {
  const city = navigation.getParam('city');

  const locationsSection: SectionData<LocationEntity[]>[] = useSelector(
    (state: ApplicationState) =>
      LocationsSelectores.groupLocationsByType(state, city.id),
  );

  function goNewLocation(idCity: string) {
    navigation.navigate(NAVIGATOR_NEW_LOCATION, {
      idCity,
    });
  }

  function renderSectionHeader({
    section: { title },
  }: {
    section: SectionListData<SectionData<LocationEntity[]>>;
  }) {
    return <StyledSectionTitle>{title.toUpperCase()}</StyledSectionTitle>;
  }

  function renderLocationItem({ item }: { item: LocationEntity }) {
    return <LocationItem idCity={city.id} location={item} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {!locationsSection.length ? (
          <Text>Sem localidades cadastradas</Text>
        ) : (
          <SectionList
            bounces={false}
            contentContainerStyle={{ marginHorizontal: 16, paddingBottom: 16 }}
            keyExtractor={(item, index) => item + index}
            sections={locationsSection}
            renderItem={renderLocationItem}
            renderSectionHeader={renderSectionHeader}
          />
        )}

        <FloatingButton onPress={() => goNewLocation(city.id)} />
      </View>
    </SafeAreaView>
  );
}

LocationList.navigationOptions = ({
  navigation,
}: NavigationStackScreenProps<NavigationParams>) => {
  const city = navigation.getParam('city');
  return {
    title: city.name,
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: colors.PURPLE,
    },
    headerTintColor: colors.WHITE,
    headerTitleStyle: {
      fontFamily: fonts.MEDIUM,
      fontSize: 20,
    },
  };
};

export default LocationList;

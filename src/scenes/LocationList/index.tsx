import React from 'react';
import { SectionList, SectionListData } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import FloatingButton from '~/src/components/FloatingButton';
import LocationItem from './components/LocationItem';
import SCContainer, {
  SCSafeContainer,
  SCCentralizedContainer,
} from '~/src/components/SCContainer';
import { SCOrangeTitle, StyledWarningText } from '~/src/components/SCText';

import SectionData from '~/src/model/SectionData';
import LocationEntity from '~/src/model/LocationEntity';
import CityEntity from '~/src/model/CityEntity';

import { ApplicationState } from '~/src/store';
import * as LocationsSelectores from '~/src/store/locations/selectors';

import { colors } from '~/src/styles/theme';
import baseHeader from '~/src/styles/headerStyle';
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
    return <SCSectionTitle>{title.toUpperCase()}</SCSectionTitle>;
  }

  function renderLocationItem({ item }: { item: LocationEntity }) {
    return <LocationItem idCity={city.id} location={item} />;
  }

  return (
    <SCSafeContainer>
      <SCContainer>
        {!locationsSection.length ? (
          <SCCentralizedContainer marginBottom>
            <StyledWarningText>Sem localidades cadastradas</StyledWarningText>
          </SCCentralizedContainer>
        ) : (
          <SCSectionList
            bounces={false}
            keyExtractor={(item, index) => item + index}
            sections={locationsSection}
            renderItem={renderLocationItem}
            renderSectionHeader={renderSectionHeader}
          />
        )}

        <FloatingButton onPress={() => goNewLocation(city.id)} />
      </SCContainer>
    </SCSafeContainer>
  );
}

const SCSectionList = styled(SectionList)`
  margin-horizontal: 16;
  padding-bottom: 16;
`;

const SCSectionTitle = styled(SCOrangeTitle)`
  text-align: center;
  margin-top: 20;
  margin-bottom: 5;
  padding-vertical: 5;

  border-width: 0.3;
  border-color: ${colors.ORANGE};
  background-color: ${colors.WHITE};
`;

LocationList.navigationOptions = ({
  navigation,
}: NavigationStackScreenProps<NavigationParams>) => {
  const city = navigation.getParam('city');
  return {
    title: city.name,
    ...baseHeader,
  };
};

export default LocationList;

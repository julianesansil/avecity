import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import styled from 'styled-components/native';

import CityList from './scenes/CityList';
import NewCity from './scenes/NewCity';
import LocationList from './scenes/LocationList';
import NewLocation from './scenes/NewLocation';
import AboutApp from './scenes/AboutApp';

import NavigationProps from './model/NavigationProps';

import { fonts, colors } from '~/src/styles/theme';

export const NAVIGATOR_NEW_CITY = 'NewCity';
export const NAVIGATOR_LIST_LOCATION = 'LocationList';
export const NAVIGATOR_NEW_LOCATION = 'NewLocation';

// Cidades
const CitiesStack = createStackNavigator(
  {
    CityList,
    NewCity,

    LocationList,
    NewLocation,
  },

  { initialRouteName: 'CityList' },
);

CitiesStack.navigationOptions = ({ navigation }: NavigationProps) => {
  // Configuração para mostrar as abas apenas na tela inicial (e não nas telas internas)
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    title: 'Cidades',
    tabBarIcon: ({ focused }: { focused: boolean }) => {
      const color = focused ? colors.PURPLE : colors.LIGHT_GRAY;
      return <SCIcon name="globe" color={color} />;
    },
  };
};

// Sobre
const AboutStack = createStackNavigator({
  AboutApp,
});

AboutStack.navigationOptions = {
  title: 'Sobre',
  tabBarIcon: ({ focused }: { focused: boolean }) => {
    const color = focused ? colors.PURPLE : colors.LIGHT_GRAY;
    return <SCIcon name="information-circle-outline" color={color} />;
  },
};

// Abas
const AppNavigator = createBottomTabNavigator(
  {
    Cities: CitiesStack,
    AboutApp: AboutStack,
  },

  {
    initialRouteName: 'Cities',
    tabBarOptions: {
      showLabel: true,
      activeTintColor: colors.PURPLE,
      inactiveTintColor: colors.LIGHT_GRAY,
      labelStyle: {
        fontFamily: fonts.REGULAR,
        fontSize: Platform.select({ ios: 13, android: 11 }),
        marginBottom: Platform.select({ ios: 0, android: 5 }),
      },
    },
  },
);

export const SCIcon = styled(Icon)`
  font-size: 25;
  margin-top: ${Platform.select({ ios: 5, android: 3 })};

  color: ${(props: { color: string }) => props.color};
`;

export default createAppContainer(AppNavigator);

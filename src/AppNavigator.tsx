import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CityList from './scenes/CityList';
import NewCity from './scenes/NewCity';
import LocationList from './scenes/LocationList';
import NewLocation from './scenes/NewLocation';
import AboutApp from './scenes/AboutApp';
import NavigationProps from './model/NavigationProps';

export const NAVIGATOR_NEW_CITY = 'NewCity';
export const NAVIGATOR_LIST_LOCATION = 'LocationList';
export const NAVIGATOR_NEW_LOCATION = 'NewLocation';

const MainStack = createStackNavigator({
  CityList: CityList,
  NewCity: NewCity,

  LocationList: LocationList,
  NewLocation: NewLocation,
});

// Configuração para mostrar as abas apenas na tela inicial (e não nas telas internas)
MainStack.navigationOptions = ({ navigation }: NavigationProps) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const AboutStack = createStackNavigator({
  AboutApp: AboutApp,
});

const AppNavigator = createBottomTabNavigator(
  {
    Main: MainStack,
    AboutApp: AboutStack,
  },

  {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(AppNavigator);

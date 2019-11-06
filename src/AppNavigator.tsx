import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

export const NAVIGATOR_HOME = 'Home';
export const NAVIGATOR_DETAILS = 'Details';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },

  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);

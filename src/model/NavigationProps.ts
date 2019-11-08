import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

interface NavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default NavigationProps;

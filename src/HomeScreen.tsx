import React from 'react';
import {View, Text, Button} from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

import {NAVIGATOR_DETAILS} from './AppNavigator';

interface INavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const HomeScreen = ({navigation}: INavigationProps) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>

      <Button
        title="Press me"
        onPress={() => navigation.navigate(NAVIGATOR_DETAILS)}
      />
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import { View, Text } from 'react-native';

function AboutApp() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sobre o app</Text>
    </View>
  );
}

AboutApp.navigationOptions = {
  title: 'Sobre o Aplicativo',
};

export default AboutApp;

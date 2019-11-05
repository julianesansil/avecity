import React from 'react';
import {View, Text} from 'react-native';
import Component from '~/Component';

const NewPage = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>I'm an imported file</Text>
      <Component></Component>
    </View>
  );
};

export default NewPage;

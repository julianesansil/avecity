import React from 'react';
import { View, Text, Linking } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function AboutApp() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Aplicativo para mapeamento de localidades em cidades.</Text>

      <Text>Desenvolvido por:</Text>
      <Text>Juliane Silva</Text>

      <Text>Celular/Whatsapp:</Text>
      <TouchableWithoutFeedback
        onPress={() => Linking.openURL('tel:11951545438')}>
        <Text>(11) 95154-5438</Text>
      </TouchableWithoutFeedback>

      <Text>E-mail:</Text>
      <TouchableWithoutFeedback
        onPress={() => Linking.openURL('mailto:jl.sansil@gmail.com')}>
        <Text>jl.sansil@gmail.com</Text>
      </TouchableWithoutFeedback>

      <Text>Linkedin:</Text>
      <TouchableWithoutFeedback
        onPress={() =>
          Linking.openURL('https://www.linkedin.com/in/jlsansil/')
        }>
        <Text>https://www.linkedin.com/in/jlsansil/</Text>
      </TouchableWithoutFeedback>

      <Text>Github:</Text>
      <TouchableWithoutFeedback
        onPress={() => Linking.openURL('https://github.com/julianesansil')}>
        <Text>https://github.com/julianesansil</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

AboutApp.navigationOptions = {
  title: 'Sobre',
};

export default AboutApp;

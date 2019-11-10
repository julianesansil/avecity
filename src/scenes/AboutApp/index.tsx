import React from 'react';
import {
  TouchableWithoutFeedback,
  ScrollView,
  View,
  Linking,
  Image,
} from 'react-native';
import { Icon, Thumbnail } from 'native-base';
import AnimatedHomeHeader from '~/src/components/AnimatedHomeHeader';

import { StyledTitle, StyledSubtitle } from '~/src/components/StyledText';
import { colors } from '~/src/styles/theme';

import profileImage from '~/resources/images/profile.png';

function AboutApp() {
  return (
    <AnimatedHomeHeader title="Sobre">
      <ScrollView bounces={false}>
        <View style={{ padding: 16 }}>
          <StyledTitle>
            Aplicativo para mapeamento de cidades e respectivas localidades.
          </StyledTitle>

          <StyledTitle style={{ marginTop: 10, marginBottom: 5 }}>
            Conhecimentos praticados:
          </StyledTitle>

          <StyledSubtitle style={{ marginLeft: 10 }}>
            - Para organização do código: ESLint, Prettier, Babel Import,
            TypeScript
          </StyledSubtitle>
          <StyledSubtitle style={{ marginLeft: 10 }}>
            - Para estilização: Native Base, Styled Components
          </StyledSubtitle>
          <StyledSubtitle style={{ marginLeft: 10 }}>
            - Para gereciamento de estado: Redux, Redux Persist
          </StyledSubtitle>
          <StyledSubtitle style={{ marginLeft: 10 }}>
            - Para gerenciamento de rotas: React Navigation
          </StyledSubtitle>
          <StyledSubtitle style={{ marginLeft: 10 }}>
            - Para controle de datas: Moment
          </StyledSubtitle>

          <StyledTitle style={{ marginTop: 26 }}>Desenvolvido por:</StyledTitle>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 12,
              marginBottom: 7,
            }}>
            <Thumbnail source={profileImage} />
            <TouchableWithoutFeedback
              onPress={() => Linking.openURL('tel:11951545438')}>
              <StyledTitle style={{ marginLeft: 10 }}>
                Juliane Silva
              </StyledTitle>
            </TouchableWithoutFeedback>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name="call"
              style={{ fontSize: 20, color: colors.PURPLE, paddingTop: 6 }}
            />
            <TouchableWithoutFeedback
              onPress={() => Linking.openURL('tel:11951545438')}>
              <StyledSubtitle
                style={{ marginLeft: 10, textDecorationLine: 'underline' }}>
                (11) 95154-5438
              </StyledSubtitle>
            </TouchableWithoutFeedback>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name="mail"
              style={{ fontSize: 20, color: colors.PURPLE, paddingTop: 6 }}
            />
            <TouchableWithoutFeedback
              onPress={() => Linking.openURL('mailto:jl.sansil@gmail.com')}>
              <StyledSubtitle
                style={{ marginLeft: 10, textDecorationLine: 'underline' }}>
                jl.sansil@gmail.com
              </StyledSubtitle>
            </TouchableWithoutFeedback>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name="logo-linkedin"
              style={{ fontSize: 20, color: colors.PURPLE, paddingTop: 6 }}
            />
            <TouchableWithoutFeedback
              onPress={() =>
                Linking.openURL('https://www.linkedin.com/in/jlsansil/')
              }>
              <StyledSubtitle
                style={{ marginLeft: 10, textDecorationLine: 'underline' }}>
                https://www.linkedin.com/in/jlsansil/
              </StyledSubtitle>
            </TouchableWithoutFeedback>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name="logo-github"
              style={{ fontSize: 20, color: colors.PURPLE, paddingTop: 6 }}
            />
            <TouchableWithoutFeedback
              onPress={() =>
                Linking.openURL('https://github.com/julianesansil')
              }>
              <StyledSubtitle
                style={{ marginLeft: 10, textDecorationLine: 'underline' }}>
                https://github.com/julianesansil
              </StyledSubtitle>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </AnimatedHomeHeader>
  );
}

AboutApp.navigationOptions = {
  header: null,
};

export default AboutApp;

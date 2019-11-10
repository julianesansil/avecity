import React from 'react';
import { ScrollView, Linking } from 'react-native';
import { Thumbnail } from 'native-base';
import styled from 'styled-components/native';
import AnimatedHomeHeader from '~/src/components/AnimatedHomeHeader';

import ContactItem from './components/ContactItem';
import SCText, { SCTitle } from '~/src/components/SCText';

import { noHeader } from '~/src/styles/headerStyle';
import profileImage from '~/resources/images/profile.png';

function AboutApp() {
  return (
    <AnimatedHomeHeader title="Sobre">
      <ScrollView bounces={false}>
        <SCContainer>
          <SCTitle>
            Aplicativo para mapeamento de cidades e respectivas localidades.
          </SCTitle>

          <SCTopicTitle>Conhecimentos praticados:</SCTopicTitle>
          <SCTopic>
            <SCTopicText>
              - Para organização do código: ESLint, Prettier, Babel Import,
              TypeScript
            </SCTopicText>

            <SCTopicText>
              - Para estilização: Native Base, Styled Components
            </SCTopicText>

            <SCTopicText>
              - Para gereciamento de estado: Redux, Redux Persist
            </SCTopicText>

            <SCTopicText>
              - Para gerenciamento de rotas: React Navigation
            </SCTopicText>

            <SCTopicText>- Para controle de datas: Moment</SCTopicText>
          </SCTopic>

          <SCTopicTitle>Desenvolvido por:</SCTopicTitle>

          <SCTopic>
            <SCProfileImage>
              <Thumbnail source={profileImage} />
              <SCProfileTitle>Juliane Silva</SCProfileTitle>
            </SCProfileImage>

            <ContactItem
              nameIcon="call"
              contactText="(11) 95154-5438"
              onPress={() => Linking.openURL('tel:11951545438')}
            />

            <ContactItem
              nameIcon="mail"
              contactText="jl.sansil@gmail.com"
              onPress={() => Linking.openURL('mailto:jl.sansil@gmail.com')}
            />

            <ContactItem
              nameIcon="logo-linkedin"
              contactText="linkedin.com/in/jlsansil"
              onPress={() =>
                Linking.openURL('https://www.linkedin.com/in/jlsansil')
              }
            />

            <ContactItem
              nameIcon="logo-github"
              contactText="github.com/julianesansil"
              onPress={() =>
                Linking.openURL('https://github.com/julianesansil')
              }
            />
          </SCTopic>
        </SCContainer>
      </ScrollView>
    </AnimatedHomeHeader>
  );
}

const SCContainer = styled.View`
  padding-vertical: 22;
  padding-horizontal: 16;
`;

const SCTopic = styled.View`
  margin-left: 10;
`;

const SCTopicTitle = styled(SCTitle)`
  margin-top: 26;
  margin-bottom: 6;
`;

const SCTopicText = styled(SCText)`
  margin-top: 5;
`;

const SCProfileTitle = styled(SCTitle)`
  margin-left: 10;
`;

const SCProfileImage = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: 8;
`;

AboutApp.navigationOptions = noHeader;

export default AboutApp;

import React from 'react';
import { Platform, ScrollView } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  children: JSX.Element;
}

function FormKeyboardAvoiding({ children }: Props) {
  return (
    <SCKeyboardAvoidingView
      behavior={Platform.select({
        ios: 'padding',
        android: undefined,
      })}
      keyboardVerticalOffset={100}>
      <ScrollView bounces={false}>{children}</ScrollView>
    </SCKeyboardAvoidingView>
  );
}

const SCKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export default FormKeyboardAvoiding;

import React from 'react';
import { NativeBase, Button } from 'native-base';
import styled from 'styled-components/native';

import { SCTitle } from './SCText';
import { colors } from '../styles/theme';

interface Props extends NativeBase.Button {
  title: string;
}

function FormButton(props: Props) {
  return (
    <SCButton block disabled={props.disabled || false} onPress={props.onPress}>
      <SCText>{props.title}</SCText>
    </SCButton>
  );
}

const SCText = styled(SCTitle)`
  color: ${colors.WHITE};
`;

const SCButton = styled(Button)`
  margin-top: 50;
  background-color: ${colors.ORANGE};
  opacity: ${(props: { disabled: boolean }) => (props.disabled ? 0.4 : 1)};
`;

export default FormButton;

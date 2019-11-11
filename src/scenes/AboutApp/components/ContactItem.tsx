import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import styled from 'styled-components/native';

import SCText from '~/src/components/SCText';

import { colors } from '~/src/styles/theme';

interface Props {
  nameIcon: string;
  contactText: string;

  onPress: () => void;
}

function ContactItem({ nameIcon, contactText, onPress }: Props) {
  return (
    <SCContainer>
      <SCIcon name={nameIcon} />

      <TouchableOpacity onPress={onPress}>
        <SCContactText>{contactText}</SCContactText>
      </TouchableOpacity>
    </SCContainer>
  );
}

const SCContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SCIcon = styled(Icon)`
  font-size: 20;
  color: ${colors.PURPLE};

  padding-top: 6;
`;

export const SCContactText = styled(SCText)`
  margin-left: 10;
  text-decoration-line: underline;

  margin-top: 6;
`;

export default ContactItem;

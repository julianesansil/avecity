import React from 'react';
import { Item, Input } from 'native-base';

import StyledText from './StyledText';
import { colors, fonts } from '../styles/theme';

interface Props {
  label: string;
  value?: any;
  onChangeText: (text: string) => void;
}

function FormInput({ label, value, onChangeText }: Props) {
  return (
    <Item fixedLabel>
      <StyledText style={{ width: 140 }}>{label}</StyledText>

      <Input
        value={value}
        onChangeText={onChangeText}
        style={{
          borderBottomWidth: 1,
          borderColor: colors.LIGHT_GRAY,
          fontFamily: fonts.MEDIUM,
          fontSize: 15,
        }}
      />
    </Item>
  );
}

export default FormInput;

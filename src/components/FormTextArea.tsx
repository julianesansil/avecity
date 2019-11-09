import React from 'react';
import { Item, Textarea, Label } from 'native-base';

import StyledText from './StyledText';
import { colors, fonts } from '../styles/theme';

interface Props {
  label: string;
  value?: any;
  onChangeText: (text: string) => void;
}

function FormTextArea({ label, value, onChangeText }: Props) {
  return (
    <Item fixedLabel>
      <StyledText style={{ width: 140 }}>{label}</StyledText>

      <Textarea
        rowSpan={4}
        bordered={false}
        underline={false}
        style={{
          flex: 1,
          borderBottomWidth: 1,
          borderColor: colors.LIGHT_GRAY,
          fontFamily: fonts.MEDIUM,
          fontSize: 15,
        }}
        value={value}
        onChangeText={onChangeText}
      />
    </Item>
  );
}

export default FormTextArea;

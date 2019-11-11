import React from 'react';
import { Item, Textarea } from 'native-base';
import styled from 'styled-components/native';

import SCText, { SCInputText } from './SCText';

interface Props {
  label: string;
  value?: any;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
}

function FormInput({ label, value, onChangeText, onFocus }: Props) {
  return (
    <Item fixedLabel>
      <SCLabel>{label}</SCLabel>
      <SCInputText
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
      />
    </Item>
  );
}

export function FormTextArea({ label, value, onChangeText }: Props) {
  return (
    <Item fixedLabel>
      <SCLabel>{label}</SCLabel>

      <SCTextArea
        rowSpan={4}
        bordered={false}
        underline={false}
        value={value}
        onChangeText={onChangeText}
      />
    </Item>
  );
}

const SCLabel = styled(SCText)`
  width: 140;
`;

const SCTextArea = styled(Textarea)`
  ${SCInputText};
  flex: 1;
  padding-top: 16;
  padding-left: 6;
`;

export default FormInput;

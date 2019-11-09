import React from 'react';
import { Item, Textarea, Label } from 'native-base';

interface Props {
  label: string;
  value?: any;
  onChangeText: (text: string) => void;
}

function FormTextArea({ label, value, onChangeText }: Props) {
  return (
    <Item fixedLabel>
      <Label>{label}</Label>
      <Textarea
        rowSpan={5}
        bordered={false}
        underline={false}
        value={value}
        onChangeText={onChangeText}
      />
    </Item>
  );
}

export default FormTextArea;

import React from 'react';
import { Item, Input, Label } from 'native-base';

interface Props {
  label: string;
  value?: any;
  onChangeText: (text: string) => void;
}

function FormInput({ label, value, onChangeText }: Props) {
  return (
    <Item fixedLabel>
      <Label>{label}</Label>
      <Input value={value} onChangeText={onChangeText} />
    </Item>
  );
}

export default FormInput;

import React from 'react';
import { Item, Picker, Label, Icon, NativeBase } from 'native-base';

interface Props {
  children: JSX.Element[];
  label: string;
  placeholder: string;
  selectedValue: string;
  onValueChange: (text: any) => void;
}

function FormPicker({
  children,
  label,
  placeholder,
  selectedValue,
  onValueChange,
}: Props) {
  return (
    <Item picker fixedLabel>
      <Label>{label}</Label>
      <Picker
        mode="dropdown"
        style={{ width: undefined }}
        iosIcon={<Icon name="arrow-down" />}
        placeholder={placeholder}
        placeholderStyle={{ color: '#bfc6ea' }}
        placeholderIconColor="#007aff"
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        {children}
      </Picker>
    </Item>
  );
}

export default FormPicker;

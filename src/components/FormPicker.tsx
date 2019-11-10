import React from 'react';
import { Item, Picker, Label, Icon, NativeBase } from 'native-base';

import StyledText from './StyledText';
import { colors, fonts } from '../styles/theme';

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
    <Item picker fixedLabel style={{ marginVertical: 5 }}>
      <StyledText style={{ width: 140 }}>{label}</StyledText>

      <Picker
        // mode="dropdown"
        style={{
          width: 245,
          borderBottomWidth: 1,
          borderColor: colors.LIGHT_GRAY,
          fontFamily: fonts.MEDIUM,
          fontSize: 15,
        }}
        placeholder={placeholder}
        placeholderStyle={{ color: '#bfc6ea' }}
        placeholderIconColor="#007aff"
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        headerBackButtonText="Voltar"
        iosHeader="Selecione um">
        {children}
      </Picker>
    </Item>
  );
}

export default FormPicker;

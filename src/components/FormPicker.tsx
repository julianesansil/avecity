import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Picker } from 'native-base';

import SCText from './SCText';
import { colors, fonts } from '../styles/theme';

interface Props {
  children: JSX.Element[];
  label: string;
  selectedValue: string;
  onValueChange: (text: any) => void;
}

function FormPicker({ children, label, selectedValue, onValueChange }: Props) {
  return (
    <Item picker fixedLabel style={styles.selectedItem}>
      <SCText style={styles.label}>{label}</SCText>

      <Picker
        // mode="dropdown"
        style={styles.picker}
        textStyle={[styles.defaultFont, styles.selectedText]}
        itemTextStyle={styles.defaultFont}
        headerStyle={styles.modalHeader}
        headerBackButtonTextStyle={[styles.defaultFont, styles.modalHeaderText]}
        headerTitleStyle={[styles.defaultFont, styles.modalHeaderText]}
        iosHeader="Selecione um"
        headerBackButtonText="Voltar"
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        {children}
      </Picker>
    </Item>
  );
}

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: fonts.MEDIUM,
    fontSize: 15,
    color: colors.DARK_GRAY,
  },

  label: {
    width: 140,
  },

  selectedItem: {
    marginVertical: 5,
  },

  selectedText: {
    paddingLeft: 8,
  },

  modalHeader: {
    backgroundColor: colors.ORANGE,
  },

  modalHeaderText: {
    color: colors.WHITE,
  },

  picker: {
    width: 245,
    borderBottomWidth: 1,
    borderColor: colors.LIGHT_GRAY,
  },
});

export default FormPicker;

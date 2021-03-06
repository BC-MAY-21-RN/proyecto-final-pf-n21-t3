import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import { CBoxCon, CheckText, Textstar } from './Styled';

export const CheckBoxWithLabel = ({ value, changeValue, disabled = false }) => {
  return (
    <CBoxCon>
      <CheckBox
        disabled={disabled}
        value={value}
        onValueChange={newValue => changeValue(newValue)}
      />
      <CheckText>
        <Textstar> ACEPTO TERMINOS Y CONDICIONES</Textstar>
        <Textstar> CONDICIONES</Textstar>
      </CheckText>
    </CBoxCon>
  );
};

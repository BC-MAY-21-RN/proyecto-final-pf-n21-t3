import {View} from 'react-native';
import React from 'react';
import {Textbusqueda} from '../../assets/styled.js';
import { caseSelector } from './caseSelector.js';
export const SearchResults = ({selected, searchtext, navigation}) => {
  return (
    <View>

      { searchtext === '' ? (
        <Textbusqueda>Inicia tu busqueda</Textbusqueda>
      ) : (caseSelector(selected, navigation))}
    </View>
  );
};

export default SearchResults;

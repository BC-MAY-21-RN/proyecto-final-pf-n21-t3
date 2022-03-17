import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SearchSbar, TextSeach} from '../../assets/styled';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchHelper} from '../buscador/SearchHelper';

export const IconComponent = ({
  setSelected,
  searchtext,
  name,
  selected,
  nameSection,
  iconName,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        SearchHelper(name, searchtext).then(() => {
          setSelected(name);
        });
      }}>
      <SearchSbar
        style={{
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 0.4,
          shadowRadius: 3,
          elevation: 5,
        }}>
        <Ionicons
          name={iconName}
          size={50}
          color={selected == name ? 'yellow' : 'black'}
        />
        <TextSeach>{nameSection}</TextSeach>
      </SearchSbar>
    </TouchableOpacity>
  );
};

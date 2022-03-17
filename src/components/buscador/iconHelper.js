import {View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SearchSection, SearchSbar, TextSeach} from '../../assets/styled';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchHelper} from '../buscador/SearchHelper';

export const IconComponent = (setSelected, searchtext, name, selected, section) => {
  <TouchableOpacity
    onPress={() => {
      SearchHelper('track', searchtext).then(() => {
        setSelected('track');
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
        name={name}
        size={50}
        color={selected == 'track' ? 'yellow' : 'black'}
      />
      <TextSeach>{section}</TextSeach>
    </SearchSbar>
  </TouchableOpacity>;
};

import {View} from 'react-native';
import {Texto} from '../../assets/styled';
import React from 'react';

export function OR() {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 3, backgroundColor: 'white'}} />
      <Texto>
        {'  '}OR{'  '}
      </Texto>
      <View style={{flex: 1, height: 3, backgroundColor: 'white'}} />
    </View>
  );
}

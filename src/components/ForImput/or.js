import { Text, View } from 'react-native';
import {TextOR} from '../../assets/styled';
import React from 'react'

export function OR() {
    return (

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 3, backgroundColor: 'white'}} />
      <TextOR >
      {'  '}OR{'  '}
      </TextOR>
      <View style={{flex: 1, height: 3, backgroundColor: 'white'}} />
      </View>
    )
}

import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const OptionListButton = ({size, onPress}) => 
   (
    <Ionicons name={'add-circle-outline'} color={'black'} size={size} onPress={onPress}/>
  );

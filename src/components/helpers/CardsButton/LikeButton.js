import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const LikeButton = ({ size, like, onPress }) => (
  <Ionicons
    name={like ? 'heart-circle' : 'heart-circle-outline'}
    onPress={onPress}
    color={like ? 'yellow' : 'black'}
    size={size}
  />
);

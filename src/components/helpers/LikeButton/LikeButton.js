import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ViewIcon} from '../../CardInfo/Styled';

const LikeButton = ({like}) => {
  return (
    <ViewIcon>
      <Ionicons
        name={like ? 'heart-circle' : 'heart-circle-outline'}
        onPress={() => setLike(!like)}
        color={like ? 'red' : 'black'}
        size={37}
      />{' '}
    </ViewIcon>
  );
};

export default LikeButton;

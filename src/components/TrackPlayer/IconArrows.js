import React from 'react';
import {View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const IconArrows = ({name, handlerIndex, moveFunction, index, setMove, handlerBool, setIndex, direction}) => {
  return (
    <View>
      <Ionicons
          name={name ? `play-${direction}-circle-outline` : `play-${direction}-circle`}
          onPress={() => {
            setMove(true),
              setTimeout(function () {
                setMove(false);
              }, 1);
            handlerIndex(handlerBool, setIndex, index);
            moveFunction(index);
          }}
          color={name ? 'black' : 'white'}
          size={120}
        />
    </View>
  )
}

export default IconArrows
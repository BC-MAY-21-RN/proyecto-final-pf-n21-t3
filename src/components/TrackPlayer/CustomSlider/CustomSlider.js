import {View, Text} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import TrackPlayer from 'react-native-track-player';
import {HandleChange} from '../HandleChange';

export const CustomSlider = ({
  duration,
  playBackState,
  setIsSeeking,
  setSeek,
  isSeeking,
  position,
  seek,
}) => {
  return (
    <View>
      <Slider
        style={{width: 320, height: 40}}
        minimumValue={0}
        value={isSeeking ? seek : position}
        onValueChange={value => {
          TrackPlayer.pause();
          setIsSeeking(true);
          setSeek(value);
        }}
        maximumValue={duration}
        minimumTrackTintColor="#fff064"
        onSlidingComplete={val =>
          HandleChange({val, setIsSeeking, playBackState})
        }
        maximumTrackTintColor="#fff064"
        thumbTintColor="#fff064"
      />
    </View>
  );
};

export default CustomSlider;

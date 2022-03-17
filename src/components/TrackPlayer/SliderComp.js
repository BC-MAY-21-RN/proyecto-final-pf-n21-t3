import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import {useProgress} from 'react-native-track-player/lib/hooks';
import {FormatTime} from '../index';
import {styles} from './styles';
import {HandleChange} from './HandleChange';
import {CustomSlider} from './CustomSlider/CustomSlider';
export default function SliderComp() {
  const {position, duration} = useProgress(1000, null);
  const [isSeeking, setIsSeeking] = useState(false);
  const [seek, setSeek] = useState(0);
  const playbackState = usePlaybackState();
  return (
    <View style={styles.container}>
      <CustomSlider
        isSeeking={isSeeking}
        setSeek={setSeek}
        position={position}
        seek={seek}
        setIsSeeking={setIsSeeking}
        playbackState={playbackState}
        duration={duration}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.timers}>
          {FormatTime(isSeeking ? seek : position)}
        </Text>
        <Text style={styles.timers}>{FormatTime(duration)}</Text>
      </View>
    </View>
  );
}

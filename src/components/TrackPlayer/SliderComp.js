import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer from 'react-native-track-player';
import {useProgress} from 'react-native-track-player/lib/hooks';
import {HandleChange, FormatTime} from '../index'

export default function SliderComp() {
  const {position, duration} = useProgress(1000, null);
  const [isSeeking, setIsSeeking] = useState(false);
  const [seek, setSeek] = useState(0);
  return (
    <View style={styles.container}>
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
        onSlidingComplete={HandleChange}
        maximumTrackTintColor="#fff064"
        thumbTintColor="#fff064"
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

const styles = StyleSheet.create({
  container: {
    height: 70,
  },
  timers: {
    color: '#fff',
    fontSize: 16,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

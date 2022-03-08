import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import {useProgress} from 'react-native-track-player/lib/hooks';

export default function SliderComp() {
  const {position, duration} = useProgress(1000, null);
  const [isSeeking, setIsSeeking] = useState(false);
  const [seek, setSeek] = useState(0);
  const playbackState = usePlaybackState();

  const formatTime = secs => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs - minutes * 60);
    if (seconds < 10) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
  };

  const handleChange = val => {
    TrackPlayer.seekTo(val);
    if (playbackState == State.Playing) {
      TrackPlayer.play().then(() => {
        setTimeout(() => {
          setIsSeeking(false);
        }, 1000);
      });
    } else {
      TrackPlayer.pause().then(() => {
        setTimeout(() => {
          setIsSeeking(false);
        }, 1000);
      });
    }
  };

  //components
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
        onSlidingComplete={handleChange}
        maximumTrackTintColor="#fff064"
        thumbTintColor="#fff064"
      />
      <View style={styles.timeContainer}>
        <Text style={styles.timers}>
          {formatTime(isSeeking ? seek : position)}
        </Text>
        <Text style={styles.timers}>{formatTime(duration)}</Text>
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

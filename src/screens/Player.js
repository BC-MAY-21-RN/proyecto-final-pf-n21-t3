import React, {useState, useEffect} from 'react';
import {Container} from '../assets/styled.js';
import {PlayView} from '../components/Title/Styled.js';
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  useProgress,
  usePlaybackState,
  State
} from 'react-native-track-player';
import {setUpTrackPlayer} from '../components/TrackPlayer/TrackPlayerOptions.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HeaderTrackPlayer} from '../components/TrackPlayer/HeaderTrackPlayer';
import SliderComp from '../components/TrackPlayer/SliderComp';

import {
  skipPrevious,
  SkipSong,
  handlerIndex,
  togglePlayback,
} from '../components/TrackPlayer/RNTrackPlayerCapabilities';

export const Player = props => {
  const [index, setIndex] = useState(props.route.params);
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  const [back, setBack] = useState(false);
  const [forw, setForw] = useState(false);
  const {position} = useProgress();
  const playbackState = usePlaybackState()

  useEffect(() => {
    setUpTrackPlayer(index);
    return () => TrackPlayer.destroy();
  }, []);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && position >= 29) {
      handlerIndex(true, setIndex, index);
    }
  });

  return (
    <Container Padd={'0%'}>
      <HeaderTrackPlayer index={index} />
      <SliderComp></SliderComp>
      <PlayView>
        <Ionicons
          name={back ? 'play-back-circle-outline' : 'play-back-circle'}
          onPress={() => {
            setBack(true),
              setTimeout(function () {
                setBack(false);
              }, 1);
            handlerIndex(false, setIndex, index);
            skipPrevious(index);
          }}
          color={back ? 'black' : 'white'}
          size={120}
        />
        <Ionicons
          name={playbackState === State.Playing ? 'pause-circle' : 'play-circle'}
          onPress={() => {
            setPlay(!play);
            togglePlayback(!play);
          }}
          color={'white'}
          size={155}
        />
        <Ionicons
          name={forw ? 'play-forward-circle-outline' : 'play-forward-circle'}
          onPress={() => {
            setForw(true),
              setTimeout(function () {
                setForw(false);
              }, 1);
            handlerIndex(true, setIndex, index);
            SkipSong(index);
          }}
          color={forw ? 'black' : 'white'}
          size={120}
        />
      </PlayView>
    </Container>
  );
};

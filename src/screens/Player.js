import React, {useState, useEffect} from 'react';
import {Container} from '../assets/styled.js';
import {PlayView} from '../components/Title/Styled.js';
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  useProgress,
  usePlaybackState,
  State,
} from 'react-native-track-player';
import {setUpTrackPlayer} from '../components/TrackPlayer/TrackPlayerOptions.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HeaderTrackPlayer} from '../components/TrackPlayer/HeaderTrackPlayer';
import SliderComp from '../components/TrackPlayer/SliderComp';
import {IconArrows} from '../components/TrackPlayer/IconArrows';
import {
  skipPrevious,
  SkipSong,
  handlerIndex,
  togglePlayback,
} from '../components/TrackPlayer/RNTrackPlayerCapabilities';

export const Player = props => {
  const [index, setIndex] = useState(props.route.params);
  const [play, setPlay] = useState(false);
  const [back, setBack] = useState(false);
  const [forw, setForw] = useState(false);
  const {position} = useProgress();
  const playbackState = usePlaybackState();

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
        <IconArrows
          name={back}
          setMove={setBack}
          handlerIndex={handlerIndex}
          handlerBool={false}
          index={index}
          setIndex={setIndex}
          moveFunction={skipPrevious}
          direction={'back'}
        />
        <Ionicons
          name={
            playbackState === State.Playing ? 'pause-circle' : 'play-circle'
          }
          onPress={() => {
            setPlay(!play);
            togglePlayback(!play);
          }}
          color={'white'}
          size={155}
        />
        <IconArrows
          name={forw}
          setMove={setForw}
          handlerIndex={handlerIndex}
          handlerBool={true}
          index={index}
          setIndex={setIndex}
          moveFunction={SkipSong}
          direction={'forward'}
        />
      </PlayView>
    </Container>
  );
};

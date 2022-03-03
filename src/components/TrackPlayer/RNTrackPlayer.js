import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PlayView} from '../Title/Styled';
import TrackPlayer from 'react-native-track-player';
import {setUpTrackPlayer} from './TrackPlayerOptions';

useEffect(() => {
  setUpTrackPlayer();
  return () => TrackPlayer.destroy();
}, []);

export const RNTrackPlayer = (props) => {
  props.index(index)
  const SkipSong = async () => {
    await TrackPlayer.skipToNext().catch(e => {
      console.log(e), TrackPlayer.skip(0);
    });
  };
 
  const [index, setIndex] = useState(0);
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  const [back, setBack] = useState(false);
  const [forw, setForw] = useState(false);
  return (
    <PlayView>
      <Ionicons
        name={back ? 'play-back-circle-outline' : 'play-back-circle'}
        onPress={() => {
          setBack(true),
            TrackPlayer.skipToPrevious().catch(e =>
              console.log('Error de skipToPrevious', e),
            ),
            setTimeout(function () {
              setBack(false);
            }, 1);
        }}
        color={back ? 'black' : 'white'}
        size={120}
      />

      <Ionicons
        name={play ? 'pause-circle' : 'play-circle'}
        onPress={() => {
          setPlay(!play),
            play ? TrackPlayer.pause() : TrackPlayer.play()
        }}
        color={'white'}
        size={155}
      />
      <Ionicons
        name={forw ? 'play-forward-circle-outline' : 'play-forward-circle'}
        onPress={() => {
          setForw(true),
            SkipSong(),
            setTimeout(function () {
              setForw(false);
            }, 1);
        }}
        color={forw ? 'black' : 'white'}
        size={120}
      />
    </PlayView>
  );
};

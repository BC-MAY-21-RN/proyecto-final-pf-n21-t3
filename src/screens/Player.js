import React, {useState, useEffect} from 'react';
import { Store             } from '../redux/Store';
import { Container         } from '../assets/styled.js';
import { PlayView          } from '../components/Title/Styled.js';
import   TrackPlayer         from 'react-native-track-player';
import { useSelector       } from 'react-redux';
import { setUpTrackPlayer  } from '../components/TrackPlayer/TrackPlayerOptions.js';
import   Ionicons            from 'react-native-vector-icons/Ionicons';
import { HeaderTrackPlayer } from '../components/TrackPlayer/HeaderTrackPlayer';
import {
  skipPrevious,
  SkipSong,
  pauseSong,
  playSong,
} from '../components/TrackPlayer/RNTrackPlayerCapabilities';

export const Player = ( props ) => {

  const [index, setIndex] = useState(props.route.params);
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  const [back, setBack] = useState(false);
  const [forw, setForw] = useState(false);
  const data = useSelector(Store.getState);

  useEffect(() => {
    setUpTrackPlayer(index);
    return () => TrackPlayer.destroy();
  }, []);

  const handlerIndex = () => {
    let indexHelper = index;
    console.log(indexHelper)
    if (index == 2) {
      indexHelper = 0;
      setIndex(0);
    } else {
      indexHelper += 1;
      setIndex(indexHelper);
    }
  };

  return (
    <Container Padd={'0%'}>
      <HeaderTrackPlayer index={index} />
      <PlayView>
        <Ionicons
          name={back ? 'play-back-circle-outline' : 'play-back-circle'}
          onPress={() => {
            setBack(true), skipPrevious();
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
            setPlay(!play), play ? pauseSong() : playSong();
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
            handlerIndex();
            SkipSong();
          }}
          color={forw ? 'black' : 'white'}
          size={120}
        />
      </PlayView>
    </Container>
  );
};

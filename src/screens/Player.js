import {Container} from '../assets/styled.js';
import {Store} from '../redux/Store';
import React from 'react';
import {Playerloader} from '../components/index';
import {
  TitleText,
  PlayTittleView,
  PlayView,
} from '../components/Title/Styled.js';
import {RNTrackPlayer} from '../components/index';
import {TrackImage} from '../components/CardInfo/Styled.js';
import TrackPlayer from 'react-native-track-player';
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {setUpTrackPlayer} from '../components/TrackPlayer/TrackPlayerOptions.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

useEffect(() => {
  setUpTrackPlayer();
  return () => TrackPlayer.destroy();
}, []);
export const Player = props => {

  const SkipSong = async () => {
    await TrackPlayer.skipToNext().catch(e => {
      console.log(e), TrackPlayer.skip(0), setIndex(0);
    });
  };
  const currentSong = async () => {
    await TrackPlayer.getCurrentTrack().then(indexSong => setIndex(indexSong));
  };
  const [index, setIndex] = useState(0);
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  const [back, setBack] = useState(false);
  const [forw, setForw] = useState(false);
  const data = useSelector(Store.getState);

  return (
    <Container Padd={'0%'}>
      <PlayTittleView>
        <TitleText W={'40PX'}>
          {`${data.spotifyData.player[index].track.album.name}`}
        </TitleText>
        <TitleText
          W={'30px'}
          Col={
            '#FFF064'
          }>{`${data.spotifyData.player[index].track.artists[0].name}`}</TitleText>
      </PlayTittleView>
      <TrackImage
        width={'350px'}
        height={'330px'}
        source={{
          uri: data.spotifyData.player[index].track.album.images[0].url,
        }}
      />
      {/* <RNTrackPlayer /> */}
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
            setPlay(!play), play ? TrackPlayer.pause() : TrackPlayer.play();
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
            currentSong();
            SkipSong()
          }}
          color={forw ? 'black' : 'white'}
          size={120}
        />
      </PlayView>
    </Container>
  );
};

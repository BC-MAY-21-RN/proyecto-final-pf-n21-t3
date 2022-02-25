import {TouchableOpacity} from 'react-native';
import {ScrlVw, Trak} from '../../assets/styled';
import React, {useState} from 'react';
import {Title} from '../index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LikeButton} from '../index';
import {Store} from '../../redux/Store';
import {CardContainer, TrackTitle, TrackImage, SafeCard} from './Styled';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {View} from 'react-native';

export const CardTracks = props => {
  const data = useSelector(Store.getState);

  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  return (
    <ScrlVw>
      <Title Titulo={props.title} />
      <Trak>
        <LikeButton onPress={() => setLike(!like)} like={like} size={45} />
        <Ionicons
          name={play ? 'pause-circle' : 'play-circle'}
          onPress={() => setPlay(!play)}
          color={play ? 'white' : 'white'}
          size={85}
        />
        <Ionicons name={'repeat'} color={'black'} size={40} />
      </Trak>
      {data.spotifyData.tracks ? (
        data?.spotifyData?.tracks.map((tracks, index) => {
          return (
            <View key={index}>
              <TouchableOpacity>
                <CardContainer BackColor={'#FFF064'}>
                  <SafeCard>
                    <TrackImage
                      source={{uri: tracks.track.album.images[0].url}}
                    />
                    <TrackTitle
                      TextColor={'black'}
                      Wdth={'75%'}
                      TextPosition={'center'}
                      TextSize={'30px'}>
                      {tracks.track.album.name} - {tracks.track.artists[0].name}
                    </TrackTitle>
                  </SafeCard>
                </CardContainer>
              </TouchableOpacity>
            </View>
          );
        })
      ) : (
        <ActivityIndicator size={'large'} color={'white'} />
      )}
    </ScrlVw>
  );
};

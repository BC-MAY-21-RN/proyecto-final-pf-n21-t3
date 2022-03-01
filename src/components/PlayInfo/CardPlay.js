import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  CardContainer,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from '../CardInfo/Styled';
import {LikeButton} from '../index';
import {getDataSpotify} from '../../spotify/spotify_token';
import {Store} from '../../redux/Store';
import { setTracks } from '../../redux/Actions';

export const CardPlay = ({data, indice, navigation}) => {
  const [like, setLike] = useState(false);
  return (
    <CardContainer key={indice}>
      <TouchableOpacity
        onPress={() => {
            getDataSpotify(
              Store.getState().spotifyData.token,
              `${data.href}/tracks?limit=15`,
              false
            ).then(trackresponse =>{
              Store.dispatch(setTracks(trackresponse))
              Store.getState().spotifyData.tracks != undefined ? navigation.navigate('Tracks', data.name) : null
            }).catch((e) => console.log('Error de tracks' + e))
        }}>
        <SafeCard>
          <TrackImage source={{uri: data.images[0].url}} />
          <TrackTitle Wdth={'60%'}> {data.name}</TrackTitle>
          <ViewIcon>
            <LikeButton onPress={() => setLike(!like)} size={45} like={like} />
          </ViewIcon>
        </SafeCard>
      </TouchableOpacity>
    </CardContainer>
  );
};

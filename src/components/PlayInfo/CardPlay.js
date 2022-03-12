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
import {setTracks, setSearchTracks} from '../../redux/Actions';
import {dataLoadTrack} from '../TracksList/tracksInfo';

export const CardPlay = ({data, indice, navigation, search}) => {
  console.log(data)
  const [like, setLike] = useState(false);

  return (
    <CardContainer key={indice}>
      {console.log(data.href)}
      <TouchableOpacity
        onPress={() => {
          getDataSpotify(
            Store.getState().spotifyData.token,
            `${data.href}/tracks?limit=3`,
            false,
          )
            .then(trackresponse => {
              console.log(trackresponse);
              Store.dispatch(setTracks(trackresponse));
              dataLoadTrack(trackresponse)
                .then(response => {
                  Store.dispatch(setSearchTracks(response));
                  Store.getState().spotifyData.tracks != undefined
                    ? navigation.navigate('Tracks', {name: data.name, search: search})
                    : null;
                })
                .catch(console.log);
            })
            .catch(e => console.log('Error de tracks' + e));
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

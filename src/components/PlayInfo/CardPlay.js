import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  CardContainer,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from '../CardInfo/Styled';
import {getDataSpotify} from '../../spotify/spotify_token';
import {Store} from '../../redux/Store';
import {setTracks, setSearchTracks, } from '../../redux/Actions';
import {dataLoadTrack} from '../TracksList/tracksInfo';

export const CardPlay = ({data, indice, navigation}) => {
  return (
    <CardContainer key={indice}>
      <TouchableOpacity
        onPress={() => {
          getDataSpotify(
            Store.getState().spotifyData.token,
            `${data.href}/tracks?limit=15`,
            false,
          )
            .then(trackresponse => {
              
              Store.dispatch(setTracks(trackresponse));
              dataLoadTrack(trackresponse)
                .then(response => {
                  Store.dispatch(setSearchTracks(response));
                  navigation.navigate('Tracks', {name: data.name});
                })
                .catch(console.log);
            })
            .catch(e => console.log('Error de tracks' + e));
        }}>
        <SafeCard>
          <TrackImage source={{uri: data.images[0].url}} />
          <TrackTitle Wdth={'60%'}> {data.name}</TrackTitle>
          <ViewIcon>
          </ViewIcon>
        </SafeCard>
      </TouchableOpacity>
    </CardContainer>
  );
};

import React, {useState} from 'react';
import {
  CardContainer,
  RankingNumber,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from './Styled';
import {LikeButton} from '../index';
import {TouchableOpacity} from 'react-native';
import {tracksSelected} from '../TrackPlayer/TrackPlayerOptions';
import {setUpTrackPlayer} from '../TrackPlayer/TrackPlayerOptions';
import {useNavigation} from '@react-navigation/native';
import {dataLoadTrack} from '../TracksList/tracksInfo';
import {Store} from '../../redux/Store';
import {setSearchTracks} from '../../redux/Actions';
export const CardInfo = ({data, indice}) => {
  const navigation = useNavigation();
  const [like, setLike] = useState(false);
  return (
    <CardContainer key={indice}>
      <TouchableOpacity
        onPress={() => {
          dataLoadTrack(Store.getState().spotifyData.topList).then(response => {
            Store.dispatch(setSearchTracks(response));
            const selectTrack = tracksSelected(data.track.name);
            setUpTrackPlayer(selectTrack);
            navigation.navigate('Player', selectTrack);
          });
        }}>
        <SafeCard>
          <RankingNumber>#{indice + 1} </RankingNumber>
          <TrackImage source={{uri: data.track.album.images[0].url}} />
          <TrackTitle>
            {data.track.name} - {data.track.album.artists[0].name}{' '}
          </TrackTitle>
          <ViewIcon>
            <LikeButton onPress={() => setLike(!like)} like={like} size={45} />
          </ViewIcon>
        </SafeCard>
      </TouchableOpacity>
    </CardContainer>
  );
};

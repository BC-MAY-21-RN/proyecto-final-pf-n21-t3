import React, {useState} from 'react';
import {
  CardContainers,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from '../CardInfo/Styled';
import {LikeButton, setLike} from '../index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {setUpTrackPlayer} from '../TrackPlayer/TrackPlayerOptions';
import {tracksSelected} from '../TrackPlayer/TrackPlayerOptions';
import { addLikeTracks } from '../Firebase/StoreLikes';

export const CardTracks = ({data, index}) => {
  const [isLike, settLike] = useState(false);
  const navigation = useNavigation();

  return (
    <CardContainers Height={'100px'} key={index}>
      <TouchableOpacity
        onPress={() => {//search ? data.name : data.track.album.name, search, data
          const selectTrack = tracksSelected(data.album.name, false, data);
          setUpTrackPlayer(selectTrack);
          navigation.navigate('Player', selectTrack);
        }}>
        <SafeCard>{/*uri: search ? null : data.track.album.images[0].url*/}
          <TrackImage source={{uri: data.album.images[0].url}} />
          <TrackTitle TextSize={'18px'}>
            {/*search ? data.name : data.track.album.name  // search ? data.artists[0].name : data.track.artists[0].name*/ }
            {data.album.name} - {data.artists[0].name}
          </TrackTitle>
          <ViewIcon>
            <LikeButton like={isLike} onPress={() => {settLike(!isLike), addLikeTracks(data,isLike)}}  size={45} />
            <Ionicons name={'ellipsis-horizontal'} color={'black'} size={39} />
          </ViewIcon>
        </SafeCard>
      </TouchableOpacity>
    </CardContainers>
  );
};

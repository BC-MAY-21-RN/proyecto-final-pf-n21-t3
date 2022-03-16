import React, {useState} from 'react';
import {
  CardContainers,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from '../CardInfo/Styled';
import {LikeButton, setLikeSong} from '../index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {setUpTrackPlayer} from '../TrackPlayer/TrackPlayerOptions';
import {tracksSelected} from '../TrackPlayer/TrackPlayerOptions';


export const CardTracks = ({data, index, liked}) => {
  var isLiked = liked ? liked : isLike;
  const [isLike, settLike] = useState(false);
  const navigation = useNavigation();
  return (
    <CardContainers Height={'100px'} key={index}>
      <TouchableOpacity
        onPress={() => {
          const selectTrack = tracksSelected(data.album.name, false, data);
          setUpTrackPlayer(selectTrack);
          navigation.navigate('Player', selectTrack);
        }}>
        <SafeCard>
          <TrackImage source={{uri: data.album.images[0].url}} />
          <TrackTitle TextSize={'18px'}>
            {data.album.name} - {data.artists[0].name}
          </TrackTitle>
          <ViewIcon>
            <LikeButton
              like={liked ? liked : isLike}
              onPress={() => {
                settLike(!isLike), setLikeSong(data, isLiked);
              }}
              size={45}
            />
            <Ionicons name={'ellipsis-horizontal'} color={'black'} size={39} />
          </ViewIcon>
        </SafeCard>
      </TouchableOpacity>
    </CardContainers>
  );
};

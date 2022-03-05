import React, {useState} from 'react';
import {
  CardContainers,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from '../CardInfo/Styled';
import { LikeButton       } from '../index';
import   Ionicons           from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { useNavigation    } from '@react-navigation/native';
import { setUpTrackPlayer } from '../TrackPlayer/TrackPlayerOptions';
import { tracksSelected   } from '../TrackPlayer/TrackPlayerOptions';

export const CardTracks = ({data, index}) => {  
  const [like, setLike] = useState(false);
  const navigation = useNavigation();
  const { album, artists} = data.track;

  return (
    <CardContainers Height={'100px'} key={index}>
      <TouchableOpacity
        onPress={() => {
          const selectTrack = tracksSelected(album.name);
          setUpTrackPlayer(selectTrack);
          navigation.navigate('Player', selectTrack)
        }}>
        <SafeCard>
          <TrackImage source={{uri: album.images[0].url}} />
          <TrackTitle TextSize={'18px'}>
            {album.name} - {artists[0].name}
          </TrackTitle>
          <ViewIcon>
            <LikeButton onPress={() => setLike(!like)} like={like} size={45} />
            <Ionicons name={'ellipsis-horizontal'} color={'black'} size={39} />
          </ViewIcon>
        </SafeCard>
      </TouchableOpacity>
    </CardContainers>
  );
};

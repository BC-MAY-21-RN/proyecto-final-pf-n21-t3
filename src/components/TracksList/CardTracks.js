import React, {useState} from 'react';
import {
  CardContainers,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from '../CardInfo/Styled';
import {LikeButton, Title} from '../index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const CardTracks = ({data, index}) => {
  const [like, setLike] = useState(false);
  const navigation = useNavigation();
  return (
    <CardContainers Height={'100px'} key={index}>
      <TouchableOpacity onPress={() => navigation.navigate('Player', data.track.album.name, data.track.artists[0].name, data.track.album.images[0].url )}>
        <SafeCard >
          <TrackImage source={{uri: data.track.album.images[0].url}} />
          <TrackTitle TextSize={'18px'}>
            {data.track.album.name} - {data.track.artists[0].name}
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

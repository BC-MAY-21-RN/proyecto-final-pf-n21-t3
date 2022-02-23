import React, {useState} from 'react';
import {
  CardContainers,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from '../CardInfo/Styled';
import { LikeButton } from '../index';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const TrackInfo = ({data}) => {
  const [like, setLike] = useState(false);
  return (
    <CardContainers Height={'18px'}>
      <SafeCard>
        <TrackImage source={{uri: data.album}} />
        <TrackTitle TextSize={'18px'}>
          {data.Titulo} - {data.Artista}{' '}
        </TrackTitle>
        <ViewIcon>
        <LikeButton onPress={() => setLike(!like)} like={like} size={45}/>
          <Ionicons
            name={'ellipsis-horizontal'}
            onPress={() => setList(!list)}
            color={'black'}
            size={39}
          />
        </ViewIcon>
      </SafeCard>
    </CardContainers>
  );
};

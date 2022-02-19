import React, {useState} from 'react';
import {
  CardContainer,
  RankingNumber,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from './Styled';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CardInfo = ({data, indice}) => {
  const [like, setLike] = useState(false);
  return (
    <CardContainer key={indice}>
      <SafeCard>
        <RankingNumber>#{indice + 1} </RankingNumber>
        <TrackImage source={{uri: data.track.album.images[0].url}} />
        <TrackTitle>
          {data.track.name} - {data.track.album.artists[0].name}{' '}
        </TrackTitle>
        <ViewIcon>
          <Ionicons
            name={like ? 'heart-circle' : 'heart-circle-outline'}
            onPress={() => setLike(!like)}
            color={like ? 'red' : 'black'}
            size={45}
          />
          <Ionicons name={'add-circle-outline'} color={'black'} size={45} />
        </ViewIcon>
      </SafeCard>
    </CardContainer>
  );
};

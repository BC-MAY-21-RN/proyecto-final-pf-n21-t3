import React, {useState} from 'react';
import {
  CardContainer,
  RankingNumber,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from './Styled';
import { LikeButton, OptionListButton } from '../index';

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
          <LikeButton onPress={() => setLike(!like)} like={like} size={45}/>
          <OptionListButton size={45}/>
        </ViewIcon>
      </SafeCard>
    </CardContainer>
  );
};

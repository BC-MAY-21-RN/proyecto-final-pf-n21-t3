import React, {useState} from 'react';
import {
  CardContainer,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from '../CardInfo/Styled';
import { LikeButton } from '../index';

export const CardPlay = ({data, indice}) => {
  const [like, setLike] = useState(false);
  return (
    <CardContainer key={indice}>
      <SafeCard>
        <TrackImage source={{uri: data.images[0].url}} />
        <TrackTitle Wdth={'60%'}> {data.name}</TrackTitle>
        <ViewIcon>
        <LikeButton onPress={() => setLike(!like)} size={45} like={like}/>
        </ViewIcon>
      </SafeCard>
    </CardContainer>
  );
};

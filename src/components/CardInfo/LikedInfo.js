import React, {useState} from 'react';
import {
  CardContainer,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from './Styled';
import { LikeButton, OptionListButton } from '../index';

export const LikedInfo = ({data}) => {
  const [like, setLike] = useState(false);
  return (
    <CardContainer>
      <SafeCard>
        <TrackImage source={{uri: data.album}} />
        <TrackTitle Wdth={'60%'}>
          {data.Titulo} - {data.Artista}{' '}
        </TrackTitle>
          
        <ViewIcon>
          <LikeButton onPress={() => setLike(!like)} size={45} like={like}/>
          <OptionListButton size={45}/>
        </ViewIcon>
      </SafeCard>
    </CardContainer>
  );
};

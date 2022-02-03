import React, {useState} from 'react';
import {
  CardContainer,
  RankingNumber,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard
} from './Styled';
import Ionicons from 'react-native-vector-icons/Ionicons'

export const CardInfo = ({data}) => {
  const [like, setLike] = useState(false);
 return (
    <CardContainer>
      <SafeCard>
        <RankingNumber>#{data.id} </RankingNumber>
        <TrackImage source={{uri: data.album}} />
        <TrackTitle>
          {data.Titulo} - {data.Artista}{' '}
        </TrackTitle>
        <ViewIcon>
          <Ionicons name={like?'heart-circle':'heart-circle-outline'}  onPress={() => setLike(!like)} color={like?'red':'black'}  size={45}/>
          <Ionicons name={'add-circle-outline'} color={'black'} size={45}/> 
        </ViewIcon>
      </SafeCard>
    </CardContainer>
  );
};
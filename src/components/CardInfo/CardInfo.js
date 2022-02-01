import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CardContainer,RankingNumber,TrackTitle,TrackImage } from './Styled';

export const CardInfo = ({props}) => {
  return (
      <CardContainer>
        <RankingNumber>#{props.id} </RankingNumber>
      
        <TrackImage  source ={{uri: props.album}} /> 
      
        <TrackTitle> {props.Titulo} - {props.Artista} </TrackTitle>
    
      </CardContainer>
  );
};


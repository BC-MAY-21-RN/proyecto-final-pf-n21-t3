import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CardContainer,RankingNumber,TrackTitle,TrackImage } from './Styled';

export const CardInfo = () => {
  return (
    <SafeAreaView style={{paddingHorizontal: 23}}>
    <CardContainer>
      <RankingNumber>#1</RankingNumber>
      <TrackImage /> 
      <TrackTitle> Disculpa los malos pensamientos - PXNDX </TrackTitle>
    </CardContainer>
    </SafeAreaView>
  );
};


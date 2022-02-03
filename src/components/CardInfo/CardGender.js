import { View, Text } from 'react-native';
import React from 'react';
import {Gender} from '../../assets/PrubaArtist.json'
import {CardInfo} from './CardInfo';
import {
  CardContainer,
  TrackTitle,
  TrackImage,
  SafeCard
} from './Styled';

export const CardGender = () => {
  const renderGender = Gender?.map((genero, index) => {
    return (
     <CardContainer  key={index} BackColor={'#FFF064'}>
         <SafeCard>
            <TrackImage  source={{uri: genero.album}}/>
            
            <TrackTitle TextColor={'black'} Wdth={'75%'} TextPosition={'center'} TextSize={'35px'}>{genero.Nombre}</TrackTitle>
         </SafeCard>
     </CardContainer>  
    )
  })

  return (
    <View>
      {renderGender}
    </View>
  );
};



import { Store } from '../redux/Store';
import React,{useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import {Gender} from '../../assets/PrubaArtist.json'
import {CardInfo} from './CardInfo';
import { getTracks } from '../../assets/spotify/spotify_token';
import { 
  CardContainer,
  TrackTitle,
  TrackImage,
  SafeCard
} from './Styled';


export const CardGender = () => {
 
  useEffect(()=>{
    getTracks(Store.getState().token, 'https://api.spotify.com/v1/browse/categories')
     
  },[]);

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



import React from 'react';
import {LikedInfo} from './LikedInfo';
import {Musica} from '../../assets/PrubaArtist.json';
import {ContCards} from './Styled';

export const LikedList = (props) => {
  
  const renderPlace = Musica?.map((Musica, index) => {
    return (
      
      <LikedInfo key={index} data={Musica}/>
    )
  
  })
  return (
    <ContCards>
      {renderPlace}
    </ContCards>
  )
  };

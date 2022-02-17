import React from 'react';
import {TrackInfo} from './TrackInfo';
import {Musica} from '../../assets/PrubaArtist.json';
import {ContCards} from '../CardInfo/Styled';

export const TrackList = (props) => {
  
  const renderPlace = Musica?.map((Musica, index) => {
    return (
      
      <TrackInfo key={index} data={Musica}/>
    )
  
  })
  return (
    <ContCards>
      {renderPlace}
    </ContCards>
  )
  };

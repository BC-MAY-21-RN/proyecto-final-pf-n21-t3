import React from 'react';
import {CardInfo} from './CardInfo';
import {Musica} from '../../assets/PrubaArtist.json';
import {ContCard} from './Styled';

export const CardList = (props) => {
  
  const renderPlace = Musica?.map((Musica, index) => {
    return (
      
      <CardInfo key={`ranking-${index}`} data={Musica}/>
    )
  
  })
  return (
    <ContCard>
      {renderPlace}
    </ContCard>
  )
  };

  

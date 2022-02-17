import React from 'react';
import {ScrlVw} from '../../assets/styled';
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
    <ScrlVw P={'0% 3% 0% 3%'}>
      <ContCards height={'100%'} P={'3% 4% 0% 4%'}>
        <>{renderPlace}</>
      </ContCards>
    </ScrlVw>
  );
};
import React from 'react';
import {CardInfo} from './CardInfo';
//import {Musica} from '../../assets/PrubaArtist.json';
import {ContCard} from './Styled';
import {Store} from '../../redux/Store';

export const CardList = props => (
  <ContCard>
    {Store.getState().spotifyData.topList?.map((Musica, index) => (
      <CardInfo key={index} indice={index} data={Musica} />
    ))}
  </ContCard>
);

import React from 'react';
import {CardInfo} from './CardInfo';
//import {Musica} from '../../assets/PrubaArtist.json';
import {ContCard} from './Styled';
import {Store} from '../../redux/Store';

export const CardList = props => {
  const renderPlace = Store.getState().spotifyData.topList?.map(
    (Musica, index) => {
      return <CardInfo key={index} indice={index} data={Musica} />;
    },
  );
  return <ContCard>{renderPlace}</ContCard>;
};

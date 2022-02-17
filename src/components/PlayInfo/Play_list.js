import React from 'react';
import {ScrlVw} from '../../assets/styled';
import {CardPlay} from './CardPlay';
import {Musica} from '../../assets/PrubaArtist.json';
import {ContCard} from '../CardInfo/Styled';

export const ListPlay = props => {
  const renderPlace = Musica.map((Musica, index) => {
    return <CardPlay key={index} indice={index} data={Musica} />;
  });
  return (
    <ScrlVw P={'0% 3% 0% 3%'}>
      <ContCard height={'100%'} P={'3% 4% 0% 4%'}>
        <>{renderPlace}</>
      </ContCard>
    </ScrlVw>
  );
};

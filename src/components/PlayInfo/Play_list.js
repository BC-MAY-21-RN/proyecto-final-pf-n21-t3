import React from 'react';
import {ScrlVw} from '../../assets/styled';
import {CardPlay} from './CardPlay';
import {ContCard} from '../CardInfo/Styled';
import {Store} from '../../redux/Store';

export const ListPlay = props => {
  //console.log(Store.getState().spotifyData.playlists)
  const renderPlace = Store.getState().spotifyData.playlists?.map(
    (playlist, index) => {
      return <CardPlay key={index} indice={index} data={playlist} />;
    },
  );
  return (
    <ScrlVw P={'0% 3% 0% 3%'}>
      <ContCard height={'100%'} P={'3% 4% 0% 4%'}>
        <>{renderPlace}</>
      </ContCard>
    </ScrlVw>
  );
};

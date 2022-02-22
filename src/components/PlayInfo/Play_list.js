import React from 'react';
import {ScrlVw} from '../../assets/styled';
import {CardPlay} from './CardPlay';
import {ContCard} from '../CardInfo/Styled';
import {Store} from '../../redux/Store';

export const ListPlay = props => {
  const playList = Store.getState().spotifyData.playlists;

  return (
    <ScrlVw P={'0% 3% 0% 3%'}>
      <ContCard height={'100%'} P={'3% 4% 0% 4%'}>
        {playList &&
          playList.map((playlist, index) => (
            <CardPlay key={index} indice={index} data={playlist} />
          ))}
      </ContCard>
    </ScrlVw>
  );
};

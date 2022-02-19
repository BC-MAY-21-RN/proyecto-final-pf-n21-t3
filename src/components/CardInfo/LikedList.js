import React from 'react';
import {LikedInfo} from './LikedInfo';
import {ScrlVw} from '../../assets/styled';
import {Musica} from '../../assets/PrubaArtist.json';
import {ContCard} from './Styled';

export const LikedList = props => {
  const renderPlace = Musica?.map((Musica, index) => {
    return <LikedInfo key={index} data={Musica} />;
  });
  return (
    <ScrlVw P={'0% 3% 0% 3%'}>
      <ContCard height={'100%'} P={'3% 4% 0% 4%'}>
        <>{renderPlace}</>
      </ContCard>
    </ScrlVw>
  );
};

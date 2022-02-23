import React from 'react';
import {ScrlVw} from '../../assets/styled';
import {CardPlay} from './CardPlay';
import {ContCard} from '../CardInfo/Styled';
import {Store} from '../../redux/Store';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';

export const ListPlay = props => {
  const data = useSelector(Store.getState)
  return (
    <ScrlVw P={'0% 3% 0% 3%'}>
      <ContCard height={'100%'} P={'3% 4% 0% 4%'}>
        {data.spotifyData.playlists ? 
          (data.spotifyData?.playlists?.map((playlist, index) => (
            <CardPlay key={index} indice={index} data={playlist} />
          ))): <ActivityIndicator size={'large'} color={'white'}/>}
      </ContCard>
    </ScrlVw>
  );
};

import React from 'react';
import {ScrlVw} from '../../assets/styled';
import {ContCard} from '../CardInfo/Styled';
import {Store} from '../../redux/Store';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import {Played, PlayerComponent} from './Played';

export const Playerloader = props => {
  const data = useSelector(Store.getState)
  return (
    <ScrlVw P={'0% 3% 0% 3%'}>
      <ContCard height={'100%'} P={'3% 4% 0% 4%'}>
        {data.spotifyData.player ? 
          (data.spotifyData?.player?.map((player, index) => (
            <PlayerComponent key={index} indice={index} data={player} />
          ))): <ActivityIndicator size={'large'} color={'white'}/>}
      </ContCard>
    </ScrlVw>
  );
};

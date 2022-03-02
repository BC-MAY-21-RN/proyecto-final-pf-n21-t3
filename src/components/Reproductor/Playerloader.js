import React from 'react';
import {ScrlVw} from '../../assets/styled';
import {ContCard} from '../CardInfo/Styled';
import {Store} from '../../redux/Store';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {PlayerComponent} from './PlayerComponent';

export const Playerloader = ({index}) => {
  const data = useSelector(Store.getState);
  return (
    <ScrlVw P={'0% 3% 0% 3%'}>
        {data.spotifyData.tracks ? (
          <PlayerComponent index={index} />
        ) : (
          <ActivityIndicator size={'large'} color={'white'} />
        )}

    </ScrlVw>
  );
};

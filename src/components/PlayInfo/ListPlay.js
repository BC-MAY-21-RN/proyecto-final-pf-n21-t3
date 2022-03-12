import React from 'react';
import {ScrlVw} from '../../assets/styled';
import {CardPlay} from './CardPlay';
import {ContCard} from '../CardInfo/Styled';
import {ActivityIndicator} from 'react-native';
import {Store} from '../../redux/Store';

export const ListPlay = ({navigation, data, search}) => {
  var info = '';
  search ? (info = data) : (info = Store.getState().spotifyData.playlists)
  return (
    <ScrlVw P={'0% 3% 0% 3%'}>
      <ContCard height={'100%'} P={'3% 4% 0% 4%'}>
        {info ? (
          info?.map((playlist, index) => (
            <CardPlay
              key={index}
              indice={index}
              data={playlist}
              navigation={navigation}
              search={search}
            />
          ))
        ) : (
          <ActivityIndicator size={'large'} color={'white'} />
        )}
      </ContCard>
    </ScrlVw>
  );
};

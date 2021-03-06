import React from 'react';
import {CardInfo} from './CardInfo';
import {ContCard} from './Styled';
import {Store} from '../../redux/Store';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';

export const CardList = () => {
  const data = useSelector(Store.getState);

  return (
    <ContCard>
      {data.spotifyData.topList ? (
        data.spotifyData.topList.map((Musica, index) => (
          <CardInfo key={index} indice={index} data={Musica} />
        ))
      ) : (
        <ActivityIndicator color="yellow" size="large" />
      )}
    </ContCard>
  );
};

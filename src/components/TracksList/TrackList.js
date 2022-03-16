import React from 'react';
import {ContCard} from '../CardInfo/Styled';
import {CardTracks} from '../index';
import {ActivityIndicator} from 'react-native';

export const TrackList = ({title,  data, liked}) => {
  return (
    <ContCard height={'93%'} P={'3% 4% 3% 4%'}>
      {data ? (
        data.map((Musica, index) => (
          <CardTracks title={title} key={index} data={Musica}  liked={liked}/>
        ))
      ) : (
        <ActivityIndicator size={'large'} color={'white'} />
      )}
    </ContCard>
  );
};

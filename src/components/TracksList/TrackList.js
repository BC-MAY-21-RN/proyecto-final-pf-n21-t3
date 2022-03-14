import React from 'react';
import {ContCard} from '../CardInfo/Styled';
import {CardTracks} from '../index';
import {Store} from '../../redux/Store';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';

export const TrackList = ({title,  data}) => {
  const tracks = useSelector(Store.getState);
  //console.log(data)
  
  return (
    <ContCard height={'93%'} P={'3% 4% 3% 4%'}>
      {data ? (
        data.map((Musica, index) => (
          <CardTracks title={title} key={index} data={Musica}  />
        ))
      ) : (
        <ActivityIndicator size={'large'} color={'white'} />
      )}
    </ContCard>
  );
};

import React from 'react';
import {ContCard} from '../CardInfo/Styled';
import {CardTracks} from '../index';
import {Store} from '../../redux/Store';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';

export const TrackList = ({title, search, data}) => {
  const tracks = useSelector(Store.getState);
  //console.log(data)
  var info = '';
  search
    ? (info = data)
    : (info = tracks.spotifyData.tracks);
  return (
    <ContCard height={'93%'} P={'3% 4% 3% 4%'}>
      {info ? (
        info.map((Musica, index) => (
          <CardTracks title={title} key={index} data={Musica} search={search} />
        ))
      ) : (
        <ActivityIndicator size={'large'} color={'white'} />
      )}
    </ContCard>
  );
};

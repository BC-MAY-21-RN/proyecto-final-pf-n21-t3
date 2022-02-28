import React from 'react';
import {ContCard} from '../CardInfo/Styled';
import {CardTracks} from '../index';
import {Store} from '../../redux/Store';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';

export const TrackList = ({title}) => {
  const tracks = useSelector(Store.getState);
  return (
    <ContCard height={'93%'} P={'3% 4% 3% 4%'}>
      {tracks.spotifyData.tracks ? (
        tracks.spotifyData.tracks.map((Musica, index) => (
          <CardTracks title={title} index={index} data={Musica} />
        ))
      ) : (
        <ActivityIndicator size={'large'} color={'white'} />
      )}
    </ContCard>
  );
};

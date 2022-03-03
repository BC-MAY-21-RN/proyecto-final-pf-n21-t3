import {Container} from '../assets/styled.js';
import {Store} from '../redux/Store.js';
import React from 'react';
import {Playerloader} from '../components/index';
import {TitleText, PlayTittleView} from '../components/Title/Styled.js';
import {RNTrackPlayer} from '../components/index';
import { TrackImage } from '../components/CardInfo/Styled.js';
import TrackPlayer from 'react-native-track-player'
import { useState } from 'react';

export const Player = props => {

  return (
    <Container Padd={'0%'}>
      <PlayTittleView>
        <TitleText W={'40PX'}>
          {`${
            Store.getState().spotifyData.player[props.route.name].track.album
              .name
          }`}
        </TitleText>
        <TitleText W={'30px'} Col={'#FFF064'}>{`${
          Store.getState().spotifyData.player[props.route.name].track
            .artists[0].name
        }`}</TitleText>
      </PlayTittleView>
      <TrackImage
        width={'350px'}
        height={'330px'}
        source={{
          uri: Store.getState().spotifyData.player[props.route.name].track.album.images[0]
            .url,
        }}
      />
      <RNTrackPlayer />
    </Container>
  );
};

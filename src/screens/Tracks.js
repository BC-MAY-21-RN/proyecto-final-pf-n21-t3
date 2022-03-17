import {Container} from '../assets/styled.js';
import React from 'react';
import {TrackList} from '../components/index';
import {Title} from '../components/index';
import {ScrlVw} from '../assets/styled.js';
import {Store} from '../redux/Store.js';
export const Tracks = props => {
  const data = Store.getState().spotifyData.searchTracks;
  return (
    <Container Padd={'0%'}>
      <ScrlVw P={'0% 3% 0% 3%'}>
        <Title Titulo={props.route.params.name} />
        <TrackList data={data} />
      </ScrlVw>
    </Container>
  );
};

import {Container} from '../assets/styled.js';
import React from 'react';
import {TrackList} from '../components/index';
import {Title} from '../components/index';
import {ScrlVw} from '../assets/styled.js';
export const Tracks = props => {
  return (
    <Container Padd={'0%'}>
      <ScrlVw P={'0% 3% 0% 3%'}>
      <Title Titulo={props.route.params}/>
        <TrackList />
      </ScrlVw>
    </Container>
  );
};

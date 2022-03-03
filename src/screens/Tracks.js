import {Container} from '../assets/styled.js';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TrackList} from '../components/index';
import {Title} from '../components/index';
import {ScrlVw} from '../assets/styled.js';
export const Tracks = props => {
  const navigation = useNavigation();
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  return (
    <Container Padd={'0%'}>
      <ScrlVw P={'0% 3% 0% 3%'}>
      <Title Titulo={props.route.params}/>
        <TrackList />
      </ScrlVw>
    </Container>
  );
};

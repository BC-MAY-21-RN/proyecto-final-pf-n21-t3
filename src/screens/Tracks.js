import {Button} from 'react-native';
import {Container} from '../assets/styled.js';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {CardTracks} from '../components/index'

export const Tracks = (props) => {
  const navigation = useNavigation();
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  return (
    <Container Padd={'0%'}>
      <CardTracks title={props.route.params}/>
    </Container>
  );
};

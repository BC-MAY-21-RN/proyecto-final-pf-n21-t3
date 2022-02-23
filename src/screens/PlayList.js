import {Container} from '../assets/styled.js';
import {Title} from '../components/index.js';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ListPlay} from '../components/index.js';

export function PlayList(props) {
  const navigation = useNavigation();
  return (
    <Container Padd={'0%'}>
      <Title Titulo={props.route.params} />
      <ListPlay />
    </Container>
  );
}


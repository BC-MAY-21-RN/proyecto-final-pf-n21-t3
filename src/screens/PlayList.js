import {Container} from '../assets/styled.js';
import {Title} from '../components/index.js';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ListPlay} from '../components/index';

export function PlayList(props) {
  const navigation = useNavigation();
  return (
    <Container Padd={'0%'}>
      <Title Titulo={props.route.params.name} />
      <ListPlay navigation={navigation} search={props.route.params.search}/>
    </Container>
  );
}


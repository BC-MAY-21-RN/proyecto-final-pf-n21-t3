import {Container} from '../assets/styled.js';
import {Title} from '../components/index.js';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ListPlay} from '../components/index';
import { Store } from '../redux/Store.js';

export function PlayList(props) {
  const data = Store.getState().spotifyData.playlists
  const navigation = useNavigation();
  return (
    <Container Padd={'0%'}>
      <Title Titulo={props.route.params.name} />
      <ListPlay navigation={navigation} data={data}/>
    </Container>
  );
}


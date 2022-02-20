import {Container, ScrlVw, Texto} from '../assets/styled.js';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Title, CardList, CardGender} from '../components/index';
import { getPlayList, getData} from '../spotify/spotify_token.js';
import { Button } from 'react-native';
import { Store } from '../redux/Store.js';
import { setTopList } from '../redux/Actions.js';
var t;
export function Home() {
  const navigation = useNavigation();

  return (
    <Container Padd={'0%'}>
      <ScrlVw>
        <Title Titulo={'Bienvenido'} />
        <CardList />
        <Texto TextSize={'40px'}> Géneros</Texto>
        <CardGender navigation={navigation}/>
      </ScrlVw>
    </Container>
  );
}

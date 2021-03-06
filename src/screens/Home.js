import {Container, ScrlVw, Texto} from '../assets/styled.js';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Title, CardList, CardGender} from '../components/index';

export function Home() {
  const navigation = useNavigation();

  return (
    <Container Padd={'0%'}>
      <ScrlVw>
        <Title Titulo={'Bienvenido'} />
        <CardList />
        <Texto TextSize={'40px'}> Géneros</Texto>
        <CardGender navigation={navigation} />
      </ScrlVw>
    </Container>
  );
}

import { Button} from 'react-native';
import {Container, ScrlVw, Texto} from '../assets/styled.js';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Title, CardList, CardGender} from '../components/index';
import {Store} from '../redux/Store.js';

export function Home() {
  const navigation = useNavigation();
  console.log(Store.getState().email);
  return (
    <Container Padd={'0%'}>
      <ScrlVw>
        <Title Titulo={'Bienvenido'} />
        <CardList />
        <Texto TextSize={'40px'}> Géneros</Texto>
        <CardGender />
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Ir a login"
        />
      </ScrlVw>
    </Container>
  );
}

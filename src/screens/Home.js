import { Text, Button} from 'react-native';
import {Container, Boton,ScrlVw  } from '../assets/styled.js';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import  { Title, CardList, CardGender}  from '../components/index';

export function Home ()  {
  const navigation = useNavigation();
  return (
    <Container  Padd={'0%'}>
        <ScrlVw> 
        <Title Titulo={'Bienvenido'}/>
        <CardList />
        <CardGender />
        <Button onPress={() => navigation.navigate('Login')} title='Ir a login'/>
     </ScrlVw>
    </Container>
  );
};

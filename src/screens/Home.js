import { Text, Button } from 'react-native';
import {Container, Boton} from '../assets/styled.js';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import  { Title, CardInfo }  from '../components/index';

export function Home ()  {
  const navigation = useNavigation();
  return (
    <Container>
      <Title Titulo={'Bienvenido'}/>
      <CardInfo />
      <Button onPress={() => navigation.navigate('Login')} title='Ir a login'/>
      <Boton>
        <Text style={{color: 'black'}}> Estoy en HOME</Text>
      </Boton>
    
    </Container>
  );
};

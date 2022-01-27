import {Container, Boton, Logo} from '../assets/styled.js';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export const Login = () => {
   const navigation = useNavigation();
  return (
    <Container>
      <Logo />

      <Boton onPress={() => {navigation.navigate('Main')}}>
        <Text style={{color:'black'}}>Iniciar sesión</Text>
      </Boton>

      <Boton BackColor={'#4B367C'} BColor={'#FFFFFF'} onPress={() => {navigation.navigate('Register')}}>
        <Text style={{color:'white'}}>Registrarse</Text>
      </Boton>
    </Container>
  );
};

import {Container, Boton, Logo} from '../assets/styled.js';
import { Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export const Register = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Logo />|

      <Boton onPress={() => navigation.navigate('Login')}>
        <Text style={{color:'blue'}}>Ir a Login</Text>
      </Boton>
    </Container>
  );
};


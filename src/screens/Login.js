import {Container, Boton} from '../assets/styled.js';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export const Login = () => {
   const navigation = useNavigation();
  return (
    <Container>
      <Text style={{color:'black'}}>Estoy en Login</Text>
      
      <Boton onPress={() => {navigation.navigate('Main')}}>
        <Text style={{color:'black'}}>Iniciar sesion</Text>
      </Boton>

      <Boton BackColor={'#4B367C'} BColor={'white'} onPress={() => {navigation.navigate('Register')}}>
        <Text style={{color:'black'}}>Registrarse</Text>
      </Boton>
    </Container>
  );
};

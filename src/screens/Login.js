import {Container, Boton} from '../assets/styled.js';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export const Login = () => {
   const navigation = useNavigation();
  return (
    <Container>
      <Text style={{color:'black'}}>Estoy en Login</Text>
      
      <TouchableOpacity onPress={() => {navigation.navigate('Main')}}>
        <Text style={{color:'blue'}}>Ir a Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
        <Text style={{color:'blue'}}>Ir a Register</Text>
      </TouchableOpacity>
    </Container>
  );
};

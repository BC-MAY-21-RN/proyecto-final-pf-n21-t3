import {Container, Boton} from '../assets/styled.js';

import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export const Register = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text style={{color:'black'}}>Estoy en register</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color:'blue'}}>Ir a Login</Text>
      </TouchableOpacity>
    </Container>
  );
};


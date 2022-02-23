import {Container} from '../assets/styled.js';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import React from 'react';

export const Library = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text style={{color: 'black'}}>Estoy en LIBRARY</Text>
      <Button onPress={() => navigation.navigate('Tracks')} title='Ir a Tracks'/>
      <Button onPress={() => navigation.navigate('Liked')} title='Ir a Liked'/>
      <Button onPress={() => navigation.navigate('PlayList')} title='Ir a playlist'/>
    </Container>
  );
};


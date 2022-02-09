import { Button} from 'react-native';
import {Container, ScrlVw, Texto  } from '../assets/styled.js';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import  { Title, LikedList}  from '../components/index';

export const Liked = () =>  {
  const navigation = useNavigation();
  return (
    <Container  Padd={'0%'}>
        <ScrlVw> 
        <Title Titulo={'Liked Songs'}/>
        <LikedList />
        
        <Button onPress={() => navigation.navigate('Main')} title='Ir a Main'/>
     </ScrlVw>
    </Container>
  );
};

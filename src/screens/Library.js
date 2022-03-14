import {Title} from '../components/index';
import {ScrlVw,Container} from '../assets/styled' 
import { useNavigation } from '@react-navigation/native';
import {ListPlay} from '../components/PlayInfo/ListPlay';
import React from 'react';

export const Library = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Title Titulo={'Mis me gusta'}/>
      <ListPlay />
    </Container>
  );
};


import { Button} from 'react-native';
import {Container, ScrlVw, Trak} from '../assets/styled.js';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import  { Title, TrackList}  from '../components/index';
import Ionicons from 'react-native-vector-icons/Ionicons'

export const Tracks = () =>  {
  const navigation = useNavigation();
  const [like, setLike] = useState(false);
  const [list, setList] = useState(false);
  const [play, setPlay] = useState(false);
  return (
    <Container  Padd={'0%'}>
        <ScrlVw> 
        <Title Titulo={'Pa Llorar'}/>
        <Trak>
        <Ionicons name={like?'heart-circle':'heart-circle-outline'}  onPress={() => setLike(!like)} color={like?'red':'black'}  size={45}/>
        <Ionicons name={play?'pause-circle-outline':'play-circle'}  onPress={() => setPlay(!play)} color={play?'black':'white'}  size={85}/>
        <Ionicons name={list?'repeat': 'repeat-outline' } onPress={() => setList(!list)} color={list?'purple':'black'}  size={45}/> 
        </Trak>
        <TrackList />
        <Button onPress={() => navigation.navigate('Main')} title='Ir a Main'/>
     </ScrlVw>
    </Container>
  );
};


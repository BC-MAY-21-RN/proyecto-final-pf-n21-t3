import { Button} from 'react-native';
import {Container, ScrlVw, Trak} from '../assets/styled.js';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import  { Title, TrackList}  from '../components/index';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { LikeButton } from '../components/index';

export const Tracks = () =>  {
  const navigation = useNavigation();
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  return (
    <Container  Padd={'0%'}>
        <ScrlVw> 
        <Title Titulo={'Pa Llorar'}/>
        <Trak>
        <LikeButton onPress={() => setLike(!like)} like={like} size={45}/>
        <Ionicons name={play?'pause-circle-outline':'play-circle'}  onPress={() => setPlay(!play)} color={play?'black':'white'}  size={85}/>
        <Ionicons name={'repeat'} color={'black'}  size={45}/> 
        </Trak>
        <TrackList />
        <Button onPress={() => navigation.navigate('Main')} title='Ir a Main'/>
     </ScrlVw>
    </Container>
  );
};


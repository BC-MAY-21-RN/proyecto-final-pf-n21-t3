import { Button} from 'react-native';
<<<<<<< HEAD
import {Container, ScrlVw, Trak} from '../assets/styled.js';
=======
import {Container, ScrlVw} from '../assets/styled.js';
>>>>>>> fb73b30cd9eadc0b154416eb28425ac7f5800ecf
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
<<<<<<< HEAD
        <Trak>
        <Ionicons name={like?'heart-circle':'heart-circle-outline'}  onPress={() => setLike(!like)} color={like?'red':'black'}  size={45}/>
        <Ionicons name={play?'pause-circle-outline':'play-circle'}  onPress={() => setPlay(!play)} color={play?'black':'white'}  size={85}/>
        <Ionicons name={list?'repeat': 'repeat-outline' } onPress={() => setList(!list)} color={list?'purple':'black'}  size={45}/> 
        </Trak>
        <TrackList />
=======
        <Ionicons  style  ={{justifyContent: 'center',alignItems: 'center'}} name={like?'heart-circle':'heart-circle-outline'}  onPress={() => setLike(!like)} color={like?'red':'black'}  size={45}/>
        <Ionicons name={play?'pause-circle-outline':'play-circle'}  onPress={() => setPlay(!play)} color={play?'black':'white'}  size={85}/>
        <Ionicons name={list?'repeat': 'repeat-outline' } onPress={() => setList(!list)} color={list?'purple':'black'}  size={45}/> 
        <TrackList />
        
>>>>>>> fb73b30cd9eadc0b154416eb28425ac7f5800ecf
        <Button onPress={() => navigation.navigate('Main')} title='Ir a Main'/>
     </ScrlVw>
    </Container>
  );
<<<<<<< HEAD
};

// boton para ver la pantalla
// [<Boton
//         BackColor={'#4B367C'}
//         BColor={'#FFFFFF'}
//         onPress={() => {
//           navigation.navigate('Tracks');
//         }}>
//         <Texto style={{color: 'white'}}>Tracks</Texto>
// </Boton>]
=======
};
>>>>>>> fb73b30cd9eadc0b154416eb28425ac7f5800ecf

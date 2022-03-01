import {Container} from '../assets/styled.js';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { LikeButton, OptionListButton, Playerloader } from '../components/index';
import { TitleText, PlayView } from '../components/Title/Styled.js';
import {TrackTitle} from '../components/CardInfo/Styled';
import {Title} from '../components/index';


export const Player = (props) =>  {
  const navigation = useNavigation();
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  const [back, setBack] = useState(false);
  const [forw, setForw] = useState(false);
console.log(props.route.params)
  return (
    <Container  Padd={'0%'}>

      <PlayView>
        <Title Titulo={props.route.params}/>
        <TrackTitle>Titulo</TrackTitle>
        <TitleText W={'30px'}Col={'#FFF064'}>{'Bad bunny'}</TitleText>
        <LikeButton onPress={() => setLike(!like)} like={like} size={45}/>
        <OptionListButton size={45}/> 
      </PlayView>

        <Playerloader  />

      <PlayView>
        <Ionicons name={back?'play-back-circle-outline':'play-back-circle'}  onPress={() => setBack(!back)} color={back?'black':'white'}  size={120}/>
        <Ionicons name={play?'pause-circle-outline':'play-circle'}  onPress={() => setPlay(!play)} color={play?'black':'white'}  size={155}/>
        <Ionicons name={forw?'play-forward-circle-outline':'play-forward-circle'}  onPress={() => setForw(!forw)} color={forw?'black':'white'}  size={120}/>
      </PlayView>
    </Container>
  );
};


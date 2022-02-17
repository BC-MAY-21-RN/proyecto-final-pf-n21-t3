import React, {useState} from 'react';
import {
  CardContainers,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard
} from '../CardInfo/Styled';
import Ionicons from 'react-native-vector-icons/Ionicons'

export const TrackInfo = ({data}) => {
  const [like, setLike] = useState(false);
  const [list, setList] = useState(false);
 return (
    <CardContainers>
      <SafeCard>
        <TrackImage source={{uri: data.album}} />
<<<<<<< HEAD
        <TrackTitle font-size={'10px'}>
=======
        <TrackTitle>
>>>>>>> fb73b30cd9eadc0b154416eb28425ac7f5800ecf
          {data.Titulo} - {data.Artista}{' '}
        </TrackTitle>
        <ViewIcon>
          <Ionicons name={like?'heart-circle':'heart-circle-outline'}  onPress={() => setLike(!like)} color={like?'red':'black'}  size={37}/>
          <Ionicons name={list?'ellipsis-horizontal': 'ellipsis-horizontal-outline' } onPress={() => setList(!list)} color={list?'purple':'black'}  size={39}/> 
        </ViewIcon>
      </SafeCard>
    </CardContainers>
  );
};
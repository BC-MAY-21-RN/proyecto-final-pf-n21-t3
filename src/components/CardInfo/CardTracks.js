import { TouchableOpacity} from 'react-native';
import { ScrlVw, Trak} from '../../assets/styled';
import React, {useState} from 'react';
import {Title, TrackList} from '../index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LikeButton} from '../index';
import { Store } from '../../redux/Store';
import {CardContainer, TrackTitle, TrackImage, SafeCard} from './Styled';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';


export const CardTracks = props => {
  const data = useSelector(Store.getState)

  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  console.log(data.spotifyData.tracks[0])
  return (
    <ScrlVw>
      <Title Titulo={props.title} />
      <Trak>
        <LikeButton onPress={() => setLike(!like)} like={like} size={45} />
        <Ionicons
          name={play ? 'pause-circle' : 'play-circle'}
          onPress={() => setPlay(!play)}
          color={play ? 'white' : 'white'}
          size={85}
        />
        <Ionicons name={'repeat'} color={'black'} size={40} />
      </Trak>
        {data.spotifyData.tracks ? (data.spotifyData.tracks.map((tracks, index) =>{
          <TouchableOpacity>
          <CardContainer BackColor={'#FFF064'} key={index}>
            <SafeCard>
              <TrackImage source={{uri: tracks.track.album.images[0]}} />
              <TrackTitle
                TextColor={'black'}
                Wdth={'75%'}
                TextPosition={'center'}
                TextSize={'35px'}>
                {tracks.name}
              </TrackTitle>
            </SafeCard>
          </CardContainer>
        </TouchableOpacity>
        })) : <ActivityIndicator size={'large'} color={'white'}/>}
          
      <TrackList />
    </ScrlVw>
  );
};

import React, {useState} from 'react';
import {
  CardContainer,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from './Styled';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const LikedInfo = ({data}) => {
  const [like, setLike] = useState(false);
  const [list, setList] = useState(false);
  return (
    <CardContainer>
      <SafeCard>
        <TrackImage source={{uri: data.album}} />
        <TrackTitle Wdth={'60%'}>
          {data.Titulo} - {data.Artista}{' '}
        </TrackTitle>
        <ViewIcon>
          <Ionicons
            name={like ? 'heart-circle' : 'heart-circle-outline'}
            onPress={() => setLike(!like)}
            color={like ? 'red' : 'black'}
            size={45}
          />
          <Ionicons
            name={list ? 'list-circle' : 'list-circle-outline'}
            onPress={() => setList(!list)}
            color={list ? 'purple' : 'black'}
            size={45}
          />
        </ViewIcon>
      </SafeCard>
    </CardContainer>
  );
};

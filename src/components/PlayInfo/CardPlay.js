import React, {useState} from 'react';
import {
  CardContainer,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from '../CardInfo/Styled';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CardPlay = ({data, indice}) => {
  const [like, setLike] = useState(false);
  return (
    <CardContainer key={indice}>
      <SafeCard>
        <TrackImage source={{uri: data.images[0].url}} />
        <TrackTitle Wdth={'60%'}> {data.name}</TrackTitle>
        <ViewIcon>
          <Ionicons
            name={like ? 'heart-circle' : 'heart-circle-outline'}
            onPress={() => setLike(!like)}
            color={like ? 'red' : 'black'}
            size={45}
          />
          <Ionicons name={'add-circle-outline'} color={'black'} size={45} />
        </ViewIcon>
      </SafeCard>
    </CardContainer>
  );
};

import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  CardContainer,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from '../CardInfo/Styled';
import {LikeButton} from '../index';
import {getTracks} from '../../spotify/spotify_token';
import {Store} from '../../redux/Store';

export const CardPlay = ({data, indice, navigation}) => {
  const [like, setLike] = useState(false);
  return (
    <CardContainer key={indice}>
      <TouchableOpacity
        onPress={() => {
          if (
            getTracks(
              Store.getState().spotifyData.token,
              `${data.href}/tracks?limit=15`,
              navigation,
              data.name,
            )
          );
        }}>
        <SafeCard>
          <TrackImage source={{uri: data.images[0].url}} />
          <TrackTitle Wdth={'60%'}> {data.name}</TrackTitle>
          <ViewIcon>
            <LikeButton onPress={() => setLike(!like)} size={45} like={like} />
          </ViewIcon>
        </SafeCard>
      </TouchableOpacity>
    </CardContainer>
  );
};

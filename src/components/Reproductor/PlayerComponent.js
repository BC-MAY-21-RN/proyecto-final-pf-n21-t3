import React, {useState} from 'react';
import {Store} from '../../redux/Store';
import {
  CardContainers,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
  ContCard,
} from '../CardInfo/Styled';
//Store.getState().spotifyData.player

export const PlayerComponent = ({index}) => {
  Store.getState().spotifyData.player[index];
  const [like, setLike] = useState(false);
  return (
      <TrackImage
        width={'350px'}
        height={'330px'}
        source={{
          uri: Store.getState().spotifyData.player[index].track.album.images[0]
            .url,
        }}
      />
  );
};

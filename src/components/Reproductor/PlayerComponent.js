import React, {useState} from 'react';
import {
  CardContainers,
  TrackTitle,
  TrackImage,
  ViewIcon,
  SafeCard,
} from '../CardInfo/Styled';
//Store.getState().spotifyData.player

export const PlayerComponent = ({data}) => {
  const [like, setLike] = useState(false);
  return (

    
      <SafeCard>
        <TrackImage height={'300px'} width={'100%'} source={{uri: data.album}} />
      </SafeCard>

  );
};

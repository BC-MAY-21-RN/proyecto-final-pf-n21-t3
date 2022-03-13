import React from 'react';
import {PlayTittleView, TitleText} from '../Title/Styled';
import {Store} from '../../redux/Store';
import {TrackImage} from '../CardInfo/Styled';
import {useSelector} from 'react-redux';

export const HeaderTrackPlayer = ({index}) => {
  const {player} = useSelector(Store.getState).spotifyData;
  console.log(player)
  return (
    <>
      <PlayTittleView>
        <TitleText W={'40PX'}>
          {player[index].name.length > 12
            ? player[index].name.slice(0, 12) + '...'
            : player[index].name}
        </TitleText>
        <TitleText W={'30px'} Col={'#FFF064'}>
          {player[index].artists[0].name}
        </TitleText>
      </PlayTittleView>
      <TrackImage
        width={'350px'}
        height={'330px'}
        source={{
          uri: player[index].album.images[0].url,
        }}
      />
    </>
  );
};

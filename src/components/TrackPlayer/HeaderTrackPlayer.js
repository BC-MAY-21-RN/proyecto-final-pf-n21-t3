import React from 'react';
import {PlayTittleView, TitleText} from '../Title/Styled';
import {Store} from '../../redux/Store';
import {TrackImage} from '../CardInfo/Styled';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';

export const HeaderTrackPlayer = ({index}) => {
  const data = useSelector(Store.getState);

  return (
    <>
      <PlayTittleView>
        <TitleText W={'40PX'}>
          {index != undefined ? (
            data.spotifyData.player[index].track.album.name
          ) : (
            <ActivityIndicator size={'large'} color={'white'} />
          )}
        </TitleText>
        <TitleText W={'30px'} Col={'#FFF064'}>
          {index != undefined ? (
            data.spotifyData.player[index].track.artists[0].name
          ) : (
            <ActivityIndicator size={'large'} color={'white'} />
          )}
        </TitleText>
      </PlayTittleView>
      <TrackImage
        width={'350px'}
        height={'330px'}
        source={{
          uri:
            index != undefined ? (
              data.spotifyData.player[index].track.album.images[0].url
            ) : (
              <ActivityIndicator size={'large'} color={'white'} />
            ),
        }}
      />
    </>
  );
};

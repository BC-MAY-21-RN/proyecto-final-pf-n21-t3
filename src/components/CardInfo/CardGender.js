import React, {useEffect, useState} from 'react';
import {Store} from '../../redux/Store';
import {Alert, TouchableOpacity, View} from 'react-native';
import {CardContainer, TrackTitle, TrackImage, SafeCard} from './Styled';
import {getPlayList} from '../../spotify/spotify_token';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';

export const CardGender = ({navigation}) => {
  const data = useSelector(Store.getState);
  return (
    <View>
      {data?.spotifyData?.info ? (
        data.spotifyData.info?.map((gender, id) => (
          <TouchableOpacity
            key={id}
            activeOpacity={0.6}
            onPress={() => {
              if (
                getPlayList(
                  Store.getState().spotifyData.token,
                  `${gender.href}/playlists`,
                  navigation,
                  gender.name,
                )
              );
            }}>
            <CardContainer BackColor={'#FFF064'}>
              <SafeCard>
                <TrackImage source={{uri: gender.icons[0].url}} />
                <TrackTitle
                  TextColor={'black'}
                  Wdth={'75%'}
                  TextPosition={'center'}
                  TextSize={'35px'}>
                  {gender.name}
                </TrackTitle>
              </SafeCard>
            </CardContainer>
          </TouchableOpacity>
        ))
      ) : (
        <ActivityIndicator color="red" size="large" />
      )}
    </View>
  );
};

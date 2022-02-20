import React, {useEffect, useState} from 'react';
import {Store} from '../../redux/Store';
import {Alert, TouchableOpacity, View} from 'react-native';
import {CardContainer, TrackTitle, TrackImage, SafeCard} from './Styled';
import {getPlayList} from '../../spotify/spotify_token';

export const CardGender = ({navigation}) => (
  <View>
    {Store.getState().spotifyData.info?.map((gender, id) => (
      <TouchableOpacity
      key={id}
      activeOpacity={0.6}
      onPress={() => {
          console.log(gender.href)
          if (
            getPlayList(
              Store.getState().spotifyData.token,
              `${gender.href}/playlists`,
              navigation,
              gender.name,
            )
          ) {
          } else {
            Alert.alert('Playlist no disponible por el momento.');
          }
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
    ))}
  </View>
);

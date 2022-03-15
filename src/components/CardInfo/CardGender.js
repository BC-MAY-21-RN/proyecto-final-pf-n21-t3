import React, { useEffect, useState } from 'react';
import { Store } from '../../redux/Store';
import { Alert, TouchableOpacity, View } from 'react-native';
import { CardContainer, TrackTitle, TrackImage, SafeCard } from './Styled';
import { getDataSpotify } from '../../spotify/spotify_token';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { setPlaylists } from '../../redux/Actions';

export const CardGender = ({ navigation }) => {
  const data = useSelector(Store.getState);
  return (
    <View>
      {data?.spotifyData?.info ? (
        data.spotifyData.info?.map((gender, id) => (
          <TouchableOpacity
            key={id}
            activeOpacity={0.6}
            onPress={() => {
              getDataSpotify(
                Store.getState().spotifyData.token,
                `${gender.href}/playlists`,
                'playlists',
              )
                .then(trackresponse => {
                  Store.dispatch(setPlaylists(trackresponse));
                  // console.log(trackresponse)
                  Store.getState().spotifyData.playlists != undefined
                    ? navigation.navigate('PlayList', { name: gender.name })
                    : null;
                })
                .catch(e => {
                  console.log('error de playlists' + e);
                });
            }}>
            <CardContainer BackColor={'#A0AAB0'}>
              <SafeCard>
                <TrackImage source={{ uri: gender.icons[0].url }} />
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
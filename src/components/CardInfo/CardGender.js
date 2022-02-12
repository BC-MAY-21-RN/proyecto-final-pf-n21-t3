import React, {useEffect, useState} from 'react';
import {Store} from '../../redux/Store';
import {View} from 'react-native';
import {CardContainer, TrackTitle, TrackImage, SafeCard} from './Styled';
var img = [];
export const CardGender = () => (
  <View>
    {Store.getState().info?.map((gender, id) => (
      <CardContainer key={id} BackColor={'#FFF064'}>
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
    ))}
  </View>
);

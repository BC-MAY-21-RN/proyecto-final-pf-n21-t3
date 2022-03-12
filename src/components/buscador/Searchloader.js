import React, {useState} from 'react';
import {ScrlVw} from '../../assets/styled';
import {Text, View, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {
  ContCard,
  TrackImage,
  TrackTitle,
  CardContainer,
  ViewIcon,
} from '../CardInfo/Styled';
import {LikeButton} from '../helpers/CardsButton/LikeButton';
import {Store} from '../../redux/Store';

export const Searchloader = props => {
 
  const data = useSelector(Store.getState).spotifyData.searchAlbums;

  return (
    <ContCard height={'850px'}>
      <ScrlVw>
        {data != undefined || data != null ? (
          data.map(({name, images, artists}, key) => {
            return (
              <CardContainer key={key}>
                <TrackImage source={{uri: images[0].url}} />
                <TrackTitle>
                  {name} - {artists[0].name}
                </TrackTitle>
                <ViewIcon>
                  <LikeButton size={45} />
                </ViewIcon>
              </CardContainer>
            );
          })
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </ScrlVw>
    </ContCard>
  );
};
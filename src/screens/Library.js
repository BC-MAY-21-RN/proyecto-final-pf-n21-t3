import {Title, LoadLikes} from '../components/index';
import {ScrlVw, Container} from '../assets/styled';
import {useNavigation} from '@react-navigation/native';
import {TrackList} from '../components/TracksList/TrackList';
import React, {useState, useEffect} from 'react';
import {Store} from '../redux/Store'
import { useSelector } from 'react-redux';

export const Library = () => {
  useEffect(() =>{
    LoadLikes();
  },[])
  const navigation = useNavigation();
  return (
    <Container>
      <Title Titulo={'Mis me gusta'} />
      <TrackList data={Store.getState().LikesReducer} />
    </Container>
  );
};

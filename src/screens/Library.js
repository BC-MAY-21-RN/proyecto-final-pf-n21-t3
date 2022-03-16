import {Title, ListPlay} from '../components/index';
import {ScrlVw, Container} from '../assets/styled';
import {useNavigation} from '@react-navigation/native';
import {TrackList} from '../components/TracksList/TrackList';
import React, {useState, useEffect} from 'react';
import {Store} from '../redux/Store';
import {useSelector} from 'react-redux';
import {dataLoadTrack} from '../components/TracksList/tracksInfo';
import {TrackTitle} from '../components/CardInfo/Styled';

export const Library = () => {
  const data = useSelector(Store.getState).LikesReducer;
  const [songs, setSongs] = useState('');
  useEffect(() => {
    dataLoadTrack(data)
      .then(array => setSongs(array))
      .catch(e => console.log(e));
  }, [data]);
  const navigation = useNavigation();
  return (
    <Container>
      <Title Titulo={'Mis me gusta'} />
      <ScrlVw>
        {songs.length == 0 ? (
          <TrackTitle>No hay likes</TrackTitle>
        ) : (
          <TrackList data={songs} liked={true} />
        )}
      </ScrlVw>
    </Container>
  );
};

import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {
  Container,
  ScrlVw,
  TextSong,
  SearchSection,
  SearchSbar,
  TextSeach,
  Viewlogo,
} from '../assets/styled.js';
import {InputLog} from '../components/index';
import {Store} from '../redux/Store.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchHelper} from '../components/buscador/SearchHelper.js';
import {ListPlay} from '../components/index';
import {Logo} from '../components/Title/Styled';
import {TrackList} from '../components/index';

export const Search = ({navigation}) => {
  const [searchtext, setsearchtext] = useState('');
  const [data, setData] = useState('');
  const [selected, setSelected] = useState('album,track,playlist');
  return (
    <Container Padd={'0%'}>
      <ScrlVw>
        <Viewlogo>
          <Logo />
          <TextSong>Busqueda</TextSong>
        </Viewlogo>

        <InputLog
          placeholderAdj={'Artista, Canciones o Albunes'}
          onChangeText={evento => {
            setsearchtext(evento);
            SearchHelper(selected, evento).catch(err => {
                console.log('error de spotysearch' + err);
              });
          }}
        />
        <SearchSection>
          <TouchableOpacity
            onPress={() => {
              SearchHelper('track', searchtext).then(() => {
                setSelected('track');
              });
            }}>
            <SearchSbar
              style={{
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
              }}>
              <Ionicons
                name="musical-notes-outline"
                size={50}
                color={selected == 'track' ? 'yellow' : 'black'}
              />
              <TextSeach>Canciones</TextSeach>
            </SearchSbar>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              SearchHelper('album', searchtext).then(() => {
                setSelected('album');
              });
            }}>
            <SearchSbar
              style={{
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
              }}>
              <Ionicons
                name="albums-outline"
                size={50}
                color={selected == 'album' ? 'yellow' : 'black'}
              />
              <TextSeach>Albums</TextSeach>
            </SearchSbar>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              SearchHelper('playlist', searchtext).then(() => {
                setSelected('playlist');
              });
            }}>
            <SearchSbar
              style={{
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
              }}>
              <Ionicons
                name="library-outline"
                size={50}
                color={selected == 'playlist' ? 'yellow' : 'black'}
              />
              <TextSeach>Playlist</TextSeach>
            </SearchSbar>
          </TouchableOpacity>

        </SearchSection>

        { searchtext === '' ?  <Text>Inicia tu busqueda</Text>: null}
        {
          selected === 'album,track,playlist' && searchtext != '' ? (
            <TrackList data={Store.getState().spotifyData.searchTracks} />
          ): null
        }
        {(selected === 'track' && searchtext != '' ) ? (
          <TrackList data={Store.getState().spotifyData.searchTracks} />
        ) :null}
        
        {(selected === 'album' && searchtext != '') ? (
          <ListPlay
            data={Store.getState().spotifyData.searchAlbums}
            navigation={navigation}
          />
        ) :(null)}

        {selected === 'playlist' && searchtext != '' ? (
          <ListPlay
            data={Store.getState().spotifyData.searchPlayLists}
            navigation={navigation}
          />
        ) : null}
      </ScrlVw>
    </Container>
  );
};

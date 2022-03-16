import {View} from 'react-native';
import React from 'react';
import {Textbusqueda} from '../../assets/styled.js';
import {Store} from '../../redux/Store';
import {ListPlay} from '../../components/index';
import {TrackList} from '../../components/index';

export const SearchResults = ({selected, searchtext, navigation}) => {
  return (
    <View>
      {searchtext === '' ? (
        <Textbusqueda>Inicia tu busqueda</Textbusqueda>
      ) : null}
      {selected === 'album,track,playlist' && searchtext != '' ? (
        <TrackList data={Store.getState().spotifyData.searchTracks} />
      ) : null}
      {selected === 'track' && searchtext != '' ? (
        <TrackList
          data={Store.getState().spotifyData.searchTracks}
          search={true}
        />
      ) : null}
      {selected === 'album' && searchtext != '' ? (
        <ListPlay
          data={Store.getState().spotifyData.searchAlbums}
          navigation={navigation}
          search={true}
        />
      ) : null}
      {selected === 'playlist' && searchtext != '' ? (
        <ListPlay
          data={Store.getState().spotifyData.searchPlayLists}
          navigation={navigation}
          search={true}
        />
      ) : null}
    </View>
  );
};

export default SearchResults;

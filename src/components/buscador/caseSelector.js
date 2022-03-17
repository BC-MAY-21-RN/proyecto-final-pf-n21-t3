import React from 'react';
import {Store} from '../../redux/Store';
import {ListPlay} from '../../components/index';
import {TrackList} from '../../components/index';

export function caseSelector(selected, navigation) {
  switch (selected) {
    case 'album,track,playlist':
      return <TrackList data={Store.getState().spotifyData.searchTracks} />;
    case 'track':
      return (
        <TrackList
          data={Store.getState().spotifyData.searchTracks}
          search={true}
        />
      );
    case 'album':
      return (
        <ListPlay
          data={Store.getState().spotifyData.searchAlbums}
          navigation={navigation}
          search={true}
        />
      );
    case 'playlist':
      return (
        <ListPlay
          data={Store.getState().spotifyData.searchPlayLists}
          navigation={navigation}
          search={true}
        />
      );
  }
}

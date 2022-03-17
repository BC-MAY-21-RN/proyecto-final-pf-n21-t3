import React from 'react';
import {Store} from '../../redux/Store';
import {ListPlay, TrackList} from '../../components/index';

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
    default:
      return (
        <ListPlay
          data={
            selected === 'playlist'
              ? Store.getState().spotifyData.searchPlayLists
              : Store.getState().spotifyData.searchAlbums
          }
          navigation={navigation}
          search={true}
        />
      );
  }
}
import {spotySearchCall} from '../../spotify/spotify_search';
import {
  setSearchAlbums,
  setSearchTracks,
  setSearchPlay,
  setSearchPlayLists,
} from '../../redux/Actions';
import {Store} from '../../redux/Store';

export const SearchHelper = async (selected, searchText) => {
  // console.log(searchText)
  if (searchText != '') {
    await spotySearchCall(searchText, selected)
      .then(({albums, tracks, playlists}) => {
        // console.log(albums.items[0])
        //console.log(playlists.items[0])
        //console.log('esto ' +tracks)
        tracks ? Store.dispatch(setSearchTracks(tracks.items)) : null;
        albums ? Store.dispatch(setSearchAlbums(albums.items)) : null;
        playlists ? Store.dispatch(setSearchPlayLists(playlists.items)) : null;
      })
      .catch(err => console.log('error de spotysearch' + err));
  }
};

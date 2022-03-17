import {spotySearchCall} from '../../spotify/spotify_search';
import {
  setSearchAlbums,
  setSearchTracks,
  setSearchPlayLists,
} from '../../redux/Actions';
import {Store} from '../../redux/Store';

export const SearchHelper = async (selected, searchText) => {
  await spotySearchCall(searchText, selected)
    .then(({albums, tracks, playlists}) => {
      if (tracks) {
        Store.dispatch(setSearchTracks(tracks.items));
      } else if (albums) {
        Store.dispatch(setSearchAlbums(albums.items));
      } else {
        Store.dispatch(setSearchPlayLists(playlists.items));
      }
    })
    .catch(err => console.log('error de spotysearch' + err));
};

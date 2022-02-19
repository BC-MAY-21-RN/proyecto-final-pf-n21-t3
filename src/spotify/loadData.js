import {getCategories, getToplist} from './spotify_token';
import {Store} from '../redux/Store';

export async function loadData() {
  await getCategories(
    Store.getState().spotifyData.token,
    'https://api.spotify.com/v1/browse/categories?country=US',
  )
    .then(() => {
      getToplist(
        Store.getState().spotifyData.token,
        'https://api.spotify.com/v1/playlists/37i9dQZEVXbO3qyFxbkOE1/tracks?offset=0&limit=3',
      );
      return;
    })
    .catch(err => {
      return console.log('ERROR DE LOAD DATA ' + err);
    });
}

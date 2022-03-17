import {getDataSpotify} from './spotify_token';
import {Store} from '../redux/Store';
import {setinfo, setTopList} from '../redux/Actions';

export async function loadData() {
  await getDataSpotify(
    Store.getState().spotifyData.token,
    'https://api.spotify.com/v1/browse/categories?country=US',
    'categories',
  )
    .then(categoriesresponse => {
      Store.dispatch(setinfo(categoriesresponse));
      getDataSpotify(
        Store.getState().spotifyData.token,
        'https://api.spotify.com/v1/playlists/37i9dQZEVXbO3qyFxbkOE1/tracks?offset=0&limit=3',
        false,
      )
        .then(trackresponse => {
          Store.dispatch(setTopList(trackresponse));
          return true;
        })
        .catch(e => {
          console.log('Error de TOP LIST' + e);
        });
    })
    .catch(err => {
      return console.log('ERROR DE LOAD DATA ' + err);
    });
}

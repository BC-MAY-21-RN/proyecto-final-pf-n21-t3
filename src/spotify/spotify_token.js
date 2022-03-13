//https://www.youtube.com/watch?v=SbelQW2JaDQ
import base64 from 'react-native-base64';
import axios from 'axios';
import {Store} from '../redux/Store';
import { setPlaylists, setToken, setTracks} from '../redux/Actions';
import {Alert} from 'react-native';
const client_id = '5914e5016a704b0c84b27239cfee6242';
const client_secret = '02a63d27435a4e85a2f1e84048657e18';
const base64credentials = base64.encode(client_id + ':' + client_secret);

export const getToken = async () => {
  try {
    await axios(`https://accounts.spotify.com/api/token`, {
      method: 'POST',
      headers: {
        'Conten-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${base64credentials}`,
      },
      data: 'grant_type=client_credentials',
    }).then(tokenresponse => {
      console.log(tokenresponse.data.access_token);

      Store.dispatch(setToken(tokenresponse.data.access_token));

      return;
    });
  } catch (error) {
    console.log('ERROR DE TOKEN ' + error);
  }
};


export async function getDataSpotify(token, uri, prefix) {
  const datos = await axios(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(trackresponse => {
      return prefix ? trackresponse.data[prefix].items : trackresponse.data.items;
      
    })
    .catch(error => {
      console.log('error de top list ' + error);
      Alert.alert('Datos no disponible por el momento.');
      return console.log('error');
    });
  return datos;
}

/**
   * Uris de prueba
   * url toplist
   *  https://api.spotify.com/v1/playlists/37i9dQZEVXbO3qyFxbkOE1/tracks?offset=0&limit=3
   *  prefix: false
   *
   * url categories
   *  https://api.spotify.com/v1/browse/categories?country=US
   *  prefix: categories
   *
   * url playlist
   *  https://api.spotify.com/v1/browse/categories/toplists/playlists
   *  prefix: playlists
   */
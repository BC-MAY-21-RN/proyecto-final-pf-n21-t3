//https://www.youtube.com/watch?v=SbelQW2JaDQ
import base64 from 'react-native-base64';
import axios from 'axios';
import {Store} from '../redux/Store';
import {setinfo, setPlaylists, setToken, setTopList, setTracks} from '../redux/Actions';
import {Alert} from 'react-native';
import {resolvePlugin} from '@babel/core';
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

//Metodo de categorias
export const getCategories = async (token, uri) => {
  try {
    await axios(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(trackresponse => {
        Store.dispatch(setinfo(trackresponse.data.categories.items));
        return trackresponse.data.categories.items;
      })
      .catch(error => {
        console.log('error de categories ' + error);
        return console.log('error');
      });
  } catch (error) {
    console.log('Error de categories ' + error);
    return;
  }
};
//https://api.spotify.com/v1/playlists/playlist_id/tracks
//metodo de top list
export async function getToplist(token, uri) {
  try {
    await axios(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(trackresponse => {
        Store.dispatch(setTopList(trackresponse.data.items));
        return trackresponse.data.items;
      })
      .catch(error => {
        console.log('error de top list ' + error);
        return console.log('error');
      });
  } catch (error) {
    console.log('Error de top list' + error);
    return;
  }
}
//metodo de playlist
export async function getPlayList(token, uri, navigation, titulo) {
  try {
    await axios(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(trackresponse => {
          Store.dispatch(setPlaylists(trackresponse.data.playlists.items));
          navigation.navigate('PlayList', titulo);
      })
      .catch(error => {
        console.log('error de playlist getCategories ' + error);
        Alert.alert('Playlist no disponible por el momento.');
      });
  } catch (error) {
    console.log('Error playlist' + error);
  }
}

//---------------------------------------------------------------------------

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
      return estandarDatos(
        prefix ? trackresponse.data[prefix].items : trackresponse.data.items,
      );
    })
    .catch(error => {
      console.log('error de top list ' + error);
      return console.log('error');
    });

  console.log(console.log(JSON.stringify(datos, null, '--')));
  return datos;
}
//Estandarizacion de la informacion obtenida para facilital el mapeo en los componentes
export function estandarDatos(obJson) {
  //console.log(JSON.stringify(obJson, null, '--'))
  return obJson.map((item, index) => ({
    id: index,
    title: item.name ? item.name : item.track.album.name,
    artistName: item.track ? item.track.name : undefined,
    imageUri: item.track
      ? item.track.album.images[0].url
      : item.images
      ? item.images[0].url
      : item.icons[0].url,
  }));
}

export async function getTracks(token, uri, navigation, titulo) {
  try {
    await axios(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(trackresponse => {
          Store.dispatch(setTracks(trackresponse.data.items));
          navigation.navigate('Tracks', titulo);
      })
      .catch(error => {
        console.log('error de playlist getTracks ' + error);
        Alert.alert('Cacion no disponible por el momento.');
        navigation.navigate('PlayList')
      });
  } catch (error) {
    console.log('Error trackas' + error);
  }
}
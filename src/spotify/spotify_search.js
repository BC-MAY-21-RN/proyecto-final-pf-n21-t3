import axios from 'axios';
import {Store} from '../redux/Store';

const apiPrefix = 'https://api.spotify.com/v1/search';
const spotify_token = Store.getState().spotifyData.token;

export const spotySearchCall = async (searchTerm, selected) => {
  const uri = `${apiPrefix}?query=${encodeURIComponent(
    searchTerm,
  )}&type=${selected}`;
  const datos = await axios(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + spotify_token,
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return console.log('Error de peticion' + error);
    });
  return datos;
};

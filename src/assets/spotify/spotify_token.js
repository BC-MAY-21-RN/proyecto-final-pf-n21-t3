//https://www.youtube.com/watch?v=SbelQW2JaDQ
import base64 from 'react-native-base64';

const apiPrefix = 'https://accounts.spotify.com/api';
const client_id = '5914e5016a704b0c84b27239cfee6242';
const client_secret = '02a63d27435a4e85a2f1e84048657e18';

const base64credentials = base64.encode(client_id + ':' + client_secret);

export const getToken = async () => {
  console.log('token begin');
  const res = await fetch(`${apiPrefix}/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${base64credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });
  const json = await res.json();
  const newToken = json.access_token;
  console.log('token is', newToken);
  return newToken;
};

export const getGenres = async token => {
  console.log(token)
  const result = await fetch(
    `https://accounts.spotify.com/v1/browse/categories?locale=sv_US`,
    {
      method: 'GET',
      headers: {Authorization: 'Bearer ' + token},
      "Content-Type": "application/json"
    },
  );
  const data = await result.json();
  console.log( data)
  return data;
};

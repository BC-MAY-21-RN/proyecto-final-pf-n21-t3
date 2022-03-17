import {Store} from '../../redux/Store';
import {getDataSpotify} from '../../spotify/spotify_token';

export const getImage = async uri => {
  const result = await getDataSpotify(
    Store.getState().spotifyData.token,
    uri,
    false,
  )
    .then(response => {
      return response;
    })
    .catch(e => console.log(e));
  return result;
};

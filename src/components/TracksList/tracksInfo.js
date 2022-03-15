import {Store} from '../../redux/Store';
import {getDataSpotify} from '../../spotify/spotify_token';

export const dataLoadTrack = async tracks => {
  const newFormater = [];
  if (tracks[0].track) {
    tracks?.map(({track}) => {
      newFormater.push(track);
    });
  } else {
    let imageAlbum
    await getImage(tracks[0].href).then(response =>{
      imageAlbum = response.album.images[0].url
      console.log(imageAlbum)
    }).catch(e => console.log(e))

    tracks?.map(track => {
      newFormater.push({
        album: {
          name: track.name,
          images: [
            {
              url: track.image
                ? track.image
                : imageAlbum,
            },
          ],
          id: track.id,
        },
        artists: [
          {
            name: track.artists[0].name,
          },
        ],
        name: track.name,
        preview_url: track.preview_url
          ? track.preview_url
          : 'https://p.scdn.co/mp3-preview/a270730db8c094877900b167a41d186ce6755d0a?cid=5914e5016a704b0c84b27239cfee6242',
      });
    });
  }
  return newFormater;
};

const getImage = async uri => {
  const result = await getDataSpotify(
    Store.getState().spotifyData.token,
    uri,
    false,
  )
    .then(response => {
      return response
    })
    .catch(e => console.log(e));
    return result
};

/**
 * export async function loadData() {
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
      ).then(trackresponse => {
        Store.dispatch(setTopList(trackresponse));
        return true;
      }).catch((e) => {
        console.log('Error de TOP LIST' + e)
      });
    })
    .catch(err => {
      return console.log('ERROR DE LOAD DATA ' + err);
    });
}
 */

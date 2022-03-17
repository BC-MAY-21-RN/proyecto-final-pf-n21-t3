import {getImage} from '../index';
import { format } from './Format';

export async function NewFormater(tracks) {
  let imageAlbum;
  const newFormater = [];
  await getImage(tracks[0].href)
    .then(response => {
      imageAlbum = response.album.images[0].url;
    })
    .catch(e => console.log(e));
  tracks.map(track => {
    newFormater.push(format(track, imageAlbum));
  });
  return newFormater;
}


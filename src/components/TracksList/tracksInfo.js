import { NewFormater } from "./NewFormater";
export const dataLoadTrack = async tracks => {
  let newFormater = [];
  if (tracks[0].track) {
    tracks.map(({track}) => {
      newFormater.push(track);
    });
  } else {
    await NewFormater(tracks).then(response => newFormater = response)
  }
  return newFormater;
};

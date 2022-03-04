import TrackPlayer, {Capability} from 'react-native-track-player';
import {Store} from '../../redux/Store';
import {setPlayer} from '../../redux/Actions';
import getCurrentTrack from './RNTrackPlayerCapabilities';

TrackPlayer.updateOptions({
  stopWithApp: false,
  capabilities: [
    Capability.Play,
    Capability.Pause,
    Capability.Stop,
    Capability.JumpForward,
    Capability.JumpBackward,
  ],
  compactCapabilities: [Capability.Play, Capability.Pause, Capability.Stop],
});

const trackMaker = () => {
  let arrayTracks = [];
  Store.getState().spotifyData.tracks.map((data, index) => {
    arrayTracks.push({
      id: index,
      url:
        data.track.preview_url != null
          ? data.track.preview_url
          : 'https://p.scdn.co/mp3-preview/a270730db8c094877900b167a41d186ce6755d0a?cid=5914e5016a704b0c84b27239cfee6242',
      name: data.track.album.name,
      artist: data.track.artists[0].name,
      duration: data.track.duration_ms,
    });
  });
  return arrayTracks;
};

const setUpTrackPlayer = async indexSong => {
  try {
    await TrackPlayer.setupPlayer().catch(e => console.log(e));
    await TrackPlayer.add(trackMaker()).catch(e => console.log(e));
    
    indexSong != undefined
      ? (await TrackPlayer.skip(indexSong), console.log('Se cambio'))
      : console.log('Valor no valido ' + indexSong);
  } catch {
    e => console.log(e);
  }
};

function tracksSelected(name) {
  for (let i = 0; i < Store.getState().spotifyData.tracks.length; i++) {
    if (
      Store.getState().spotifyData.tracks[i].track.album.name.includes(name)
    ) {
      Store.dispatch(setPlayer(Store.getState().spotifyData.tracks));
      return i;
    }
  }
}

export {setUpTrackPlayer, tracksSelected, trackMaker};

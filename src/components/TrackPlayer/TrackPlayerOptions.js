import TrackPlayer, {Capability} from 'react-native-track-player';
import {Store} from '../../redux/Store';
import {setPlayer} from '../../redux/Actions';

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
  const arrayTracks = [];

  Store.getState().spotifyData.tracks.map(({track}, index) => {
    arrayTracks.push({
      id: index,
      url:
        track.preview_url != null
          ? track.preview_url
          : 'https://p.scdn.co/mp3-preview/a270730db8c094877900b167a41d186ce6755d0a?cid=5914e5016a704b0c84b27239cfee6242',
      name: track.album.name,
      artist: track.artists[0].name,
      duration: 30,
    });
  });
  return arrayTracks;
};

const setUpTrackPlayer = async indexSong => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(trackMaker());
    await TrackPlayer.skip(indexSong);
    return;
  } catch {
    err => {
      throw `Error en setUpPlayer ${err}`;
    };
  }
};

const tracksSelected = name => {
  let tracks = Store.getState().spotifyData.tracks;
  for (let index = 0; index < tracks.length; index++) {
    if (tracks[index].track.album.name.includes(name)) {
      Store.dispatch(setPlayer(tracks));
      return index;
    }
  }
};

export {setUpTrackPlayer, tracksSelected, trackMaker};

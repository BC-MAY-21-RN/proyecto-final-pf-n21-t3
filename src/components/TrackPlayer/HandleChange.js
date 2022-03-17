import TrackPlayer, {State} from 'react-native-track-player';

async function state (setIsSeeking){
  setTimeout(() => {
    setIsSeeking(false);
  }, 1000);
}

export const HandleChange = ({val, setIsSeeking, playbackState}) => {
  TrackPlayer.seekTo(val);
  if (playbackState == State.Playing) {
    TrackPlayer.pause().then(() => {
      state(setIsSeeking)
    });
  } else {
    TrackPlayer.play().then(() => {
      state(setIsSeeking)
    });
  }
};
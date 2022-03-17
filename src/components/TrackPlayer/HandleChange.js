import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';

async function state (){
  setTimeout(() => {
    setIsSeeking(false);
  }, 1000);
}

export const HandleChange = val => {
  const playbackState = usePlaybackState();
  
  TrackPlayer.seekTo(val);
  if (playbackState == State.Playing) {
    TrackPlayer.play().then(() => {
      state()
    });
  } else {
    TrackPlayer.pause().then(() => {
      state()
    });
  }
};
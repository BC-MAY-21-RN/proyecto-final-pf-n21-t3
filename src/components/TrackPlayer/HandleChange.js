import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';

export const HandleChange = val => {
  const playbackState = usePlaybackState();
  TrackPlayer.seekTo(val);
  if (playbackState == State.Playing) {
    TrackPlayer.play().then(() => {
      setTimeout(() => {
        setIsSeeking(false);
      }, 1000);
    });
  } else {
    TrackPlayer.pause().then(() => {
      setTimeout(() => {
        setIsSeeking(false);
      }, 1000);
    });
  }
};

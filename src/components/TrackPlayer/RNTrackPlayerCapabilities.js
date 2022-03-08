import TrackPlayer from 'react-native-track-player';

const handlerIndex = (direction, setIndex, index) => {
  let indexHelper = index;
  if (direction) {
    if (indexHelper == 14) {
      indexHelper = 0;
      setIndex(0);
    } else {
      indexHelper += 1;
      setIndex(indexHelper);
    }
  } else {
    if (indexHelper == 0) {
      indexHelper = 14;
      setIndex(14);
    } else {
      indexHelper -= 1;
      setIndex(indexHelper);
    }
  }
};

const SkipSong = async index => {
  index != 14
    ? await TrackPlayer.skipToNext().catch(e => {
        console.log('Skip error ' + index);
      })
    : await TrackPlayer.skip(0);
};

const skipPrevious = async index => {
  console.log('skipPrevius' + index);
  index != 0
    ? await TrackPlayer.skipToPrevious().catch(e =>
        console.log('Previous ERROR: ' + e),
      )
    : await TrackPlayer.skip(14);
};

const togglePlayback = async usePlaybackState => {
  usePlaybackState
    ? await TrackPlayer.play().catch(e => console.log('Play ERROR: ' + e))
    : await TrackPlayer.pause().catch(e => console.log('Pause ERROR ' + e));
};

export {SkipSong, skipPrevious, handlerIndex, togglePlayback};

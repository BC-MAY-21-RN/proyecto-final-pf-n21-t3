import TrackPlayer from 'react-native-track-player';
import {trackMaker} from './TrackPlayerOptions';

function indexLast(indexHelper, songsLength, setIndex) {
  if (indexHelper == songsLength - 1) {
    indexHelper = 0;
    setIndex(0);
  } else {
    indexHelper += 1;
    setIndex(indexHelper);
  }
}

function indexFirst(indexHelper, songsLength, setIndex) {
  if (indexHelper == 0) {
    indexHelper = songsLength - 1;
    setIndex(indexHelper);
  } else {
    indexHelper -= 1;
    setIndex(indexHelper);
  }
}

const handlerIndex = (direction, setIndex, index) => {
  let songsLength = trackMaker().length;
  songsLength = parseInt(songsLength);
  let indexHelper = index;

  if (direction) {
    indexLast(indexHelper, songsLength, setIndex);
  } else {
    indexFirst(indexHelper, songsLength, setIndex);
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

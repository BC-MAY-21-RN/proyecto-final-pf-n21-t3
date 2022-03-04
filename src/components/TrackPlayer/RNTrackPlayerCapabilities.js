import TrackPlayer from 'react-native-track-player';

const SkipSong = async () => {
  await TrackPlayer.skipToNext().catch(e => {
    console.log(e), TrackPlayer.skip(0);
  });
  const dato = 0;
  return dato;
};

const pauseSong = async () => {
  await TrackPlayer.pause().catch(e => console.log('Pause ERROR ' + e));
};

const playSong = async () => {
  await TrackPlayer.play().catch(e => console.log('Play ERROR: ' + e));
};

const skipPrevious = async () => {
  await TrackPlayer.skipToPrevious().catch(e =>
    console.log('Previous ERROR: ' + e),
  );
};

export {SkipSong, currentSong, pauseSong, skipPrevious, playSong};

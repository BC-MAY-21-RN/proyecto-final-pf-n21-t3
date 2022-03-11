import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export async function addLikeTracks(data, like) {
  var songs = [];
  like
    ? ((songs = await firestore()
        .collection(`Likes`)
        .doc(`${auth().currentUser.uid}`)
        .get()
        .catch(e => console.log(e))),
      (songs = songs._data.tracks),
      (songs = songs.filter(element => element.id != data.track.album.id)),
      await firestore()
        .collection('Likes')
        .doc(`${auth().currentUser.uid}`)
        .update({
          tracks: songs,
        })
        .catch(e => console.log(e)))
    : (
        await firestore()
          .collection(`Likes`)
          .doc(`${auth().currentUser.uid}`)
          .get()
      ).exists
    ? await firestore()
        .collection('Likes')
        .doc(`${auth().currentUser.uid}`)
        .update({
          tracks: firestore.FieldValue.arrayUnion({
            name: data.track.album.name,
            artists: data.track.artists[0].name,
            id: data.track.album.id,
            image: data.track.album.images[0].url,
            idUser: auth().currentUser.uid,
          }),
        })
        .then(console.log('ADDED'))
        .catch(e => console.log('No se agregó ' + e))
    : await firestore()
        .collection('Likes')
        .doc(`${auth().currentUser.uid}`)
        .set({
          tracks: firestore.FieldValue.arrayUnion({
            name: data.track.album.name,
            artists: data.track.artists[0].name,
            id: data.track.album.id,
            image: data.track.album.images[0].url,
            idUser: auth().currentUser.uid,
          }),
        })
        .then(console.log('ADDED'))
        .catch(e => console.log('No se agregó ' + e));
}

export async function addLikesPlaylists(data, like){
  var playList = []
  like  
    ? ((playList = await firestore()
        .collection(`Likes`)
        .doc(`${auth().currentUser.uid}`)
        .get()
        .catch(e => console.log(e))),
        (playList = playList._data.playlists),
      (playList = playList.filter(element => element.id != data.snapshot_id)),
      await firestore()
        .collection('Likes')
        .doc(`${auth().currentUser.uid}`)
        .update({
          playlists: playList,
        })
        .catch(e => console.log(e)))
    : (
        await firestore()
          .collection(`Likes`)
          .doc(`${auth().currentUser.uid}`)
          .get()
      ).exists
    ? await firestore()
        .collection('Likes')
        .doc(`${auth().currentUser.uid}`)
        .update({
          playlists: firestore.FieldValue.arrayUnion({
            name: data.name,
            artists: '',
            id: data.snapshot_id,
            image: data.images[0].url,
            idUser: auth().currentUser.uid,
          }),
        })
        .then(console.log('ADDED'))
        .catch(e => console.log('No se agregó ' + e))
    : await firestore()
        .collection('Likes')
        .doc(`${auth().currentUser.uid}`)
        .set({
          playlists: firestore.FieldValue.arrayUnion({
            name: data.name,
            artists: '',
            id: data.snapshot_id,
            image: data.images[0].url,
            idUser: auth().currentUser.uid,
          }),
        })
        .then(console.log('ADDED'))
        .catch(e => console.log('No se agregó ' + e));
}
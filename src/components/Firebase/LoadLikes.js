import  auth  from "@react-native-firebase/auth";
import  firestore  from "@react-native-firebase/firestore";
import {dataLoadTrack} from '../TracksList/tracksInfo'
import { Store } from "../../redux/Store";
import { addFavorite } from "../../redux/Actions";

export function LoadLikes (setTracks,tracks ) {
  var tracksArray = []
  var playlists = []
  firestore().collection('Likes').doc(auth().currentUser.uid).get().then(response =>{
    console.log(response._data.tracks),
    tracksArray = response._data.tracks 
    dataLoadTrack(tracksArray).then(trackResponse =>{
      Store.dispatch(addFavorite(trackResponse))
    })
  }).catch(e => console.log(e))

}
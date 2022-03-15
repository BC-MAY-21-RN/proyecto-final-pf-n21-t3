import  auth  from "@react-native-firebase/auth";
import  firestore  from "@react-native-firebase/firestore";
import {dataLoadTrack} from '../TracksList/tracksInfo'


export async function LoadLikes (rtdata, setrtData) {
  var tracksArray = []
  await firestore().collection('Likes').doc(auth().currentUser.uid).get().then(response =>{
    tracksArray = response._data.tracks 
    dataLoadTrack(tracksArray).then(trackResponse =>{
      setrtData(trackResponse)
    })
    
  }).catch(e => console.log(e))
}
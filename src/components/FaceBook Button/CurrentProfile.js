import { Profile } from 'react-native-fbsdk-next';
import { Store } from '../../redux/Store';
import { setName, setEmail, setToken } from '../../redux/Actions';

export const CurrentProfile = Profile.getCurrentProfile().then(
  function(CurrentProfile) {
    try{
      if(CurrentProfile){
        Store.dispatch(setName(` ${CurrentProfile.firstName} ${CurrentProfile.lastName} `))
        Store.dispatch(setEmail(CurrentProfile.email))
        Store.dispatch(setToken(CurrentProfile.userID))
      }
    } catch(e){
      console.log(e)
    }
  }
)

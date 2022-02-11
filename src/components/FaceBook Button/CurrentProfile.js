import {Store} from '../../redux/Store';
import {setName, setEmail, setProvider} from '../../redux/Actions';
import auth from '@react-native-firebase/auth';

export const CurrentProfile = () => {
  Store.dispatch(setName(auth().currentUser.displayName));
  Store.dispatch(setEmail(auth().currentUser.email));
  auth().currentUser.providerData.map(obj => {
    Store.dispatch(setProvider(obj.providerId));
  });
};

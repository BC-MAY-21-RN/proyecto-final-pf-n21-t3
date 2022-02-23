import {LoginManager} from 'react-native-fbsdk-next';
import {Alert} from 'react-native';
import {Store} from '../../redux/Store';
import {setEmail, setName, setPassword, setToken} from '../../redux/Actions';
import auth from '@react-native-firebase/auth';

export function signOutFB({navigation}) {
  Alert.alert('Cierra de sesión exitoso FB'),
    auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      });
  LoginManager.logOut();
  Store.dispatch(setEmail(''));
  Store.dispatch(setName(''));
  Store.dispatch(setPassword(''));
  Store.dispatch(setToken(''));
}

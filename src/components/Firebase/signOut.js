import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {Store} from '../../redux/Store';
import {
  setName,
  setPassword,
  setEmail,
  setToken,
  setUID,
} from '../../redux/Actions';

export function signOut({navigation}) {
  auth()
    .signOut()
    .then(() => {
      console.log('Sign Out'),
        Alert.alert('Cierra de sesión exitoso'),
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      Store.dispatch(setEmail(''));
      Store.dispatch(setName(''));
      Store.dispatch(setPassword(''));
      Store.dispatch(setToken(''));
      Store.dispatch(setUID(''));
    });
}

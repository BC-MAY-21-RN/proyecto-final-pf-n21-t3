import auth from '@react-native-firebase/auth';
import {Store} from '../../redux/Store';
import {Alert} from 'react-native';

export function createUser({navigation}) {
  auth()
    .createUserWithEmailAndPassword(
      Store.getState().email,
      Store.getState().password,
    )
    .then(() => {
      console.log('Sign in')
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('El email está en uso');
      }
      if (error.code === 'auth/invalid-email') {
        Alert.alert('El email es invalido');
      }
    });
}

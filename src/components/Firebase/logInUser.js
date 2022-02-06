import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {Store} from '../../redux/Store';
import {BackHandler} from 'react-native';

export function logInUser() {
  auth()
    .signInWithEmailAndPassword(
      Store.getState().email,
      Store.getState().password,
    )
    .then(() => {
      console.log('Log in'),
        BackHandler.removeEventListener('hardwareBackPress');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert(`${Store.getState().email} está en uso`);
      }
      if (error.code === 'auth/invalid-email') {
        Alert.alert(`${Store.getState().email} invalido, revisalo nuevamente`);
      }
      if (error.code === 'auth/user-not-found') {
        Alert.alert(`${Store.getState().email} no está registrado`);
      }
      if (error.code === 'auth/wrong-password') {
        Alert.alert('La contraseña es incorrecta');
      }
    });
}

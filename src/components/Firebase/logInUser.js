import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {Store} from '../../redux/Store';
import {BackHandler} from 'react-native';
import {setUID} from '../../redux/Actions';
import firestore from '@react-native-firebase/firestore';
import {setName, setEmail, setPassword} from '../../redux/Actions';

export async function logInUser({email, pswrd}) {
  auth()
    .signInWithEmailAndPassword(email, pswrd)
    .then(() => {
      console.log('Log in'), Store.dispatch(setUID(auth().currentUser.uid));
      BackHandler.removeEventListener('hardwareBackPress');
    })
    .then(async () => {
      await firestore()
        .collection('Users')
        .get()
        .then(querySnapShot => {
          querySnapShot.forEach(usuarios => {
            if (Store.getState().userData.uid == usuarios.data().id) {
              Store.dispatch(setName(usuarios.data().name));
              Store.dispatch(setEmail(usuarios.data().email));
              Store.dispatch(setPassword(usuarios.data().password));
            }
          });
        });
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert(`${Store.getState().userData.email} está en uso`);
      }
      if (error.code === 'auth/invalid-email') {
        Alert.alert(
          `${Store.getState().userData.email} invalido, revisalo nuevamente`,
        );
      }
      if (error.code === 'auth/user-not-found') {
        Alert.alert(`${Store.getState().userData.email} no está registrado`);
      }
      if (error.code === 'auth/wrong-password') {
        Alert.alert('La contraseña es incorrecta');
      }
    });
}

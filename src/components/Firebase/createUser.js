import auth from '@react-native-firebase/auth';
import {Store} from '../../redux/Store';
import {Alert} from 'react-native';
import {setName, setUID, setEmail, setPassword} from '../../redux/Actions';
import firestore from '@react-native-firebase/firestore';

export function createUser({nombre, pswrd, email}) {
  auth()
    .createUserWithEmailAndPassword(email, pswrd)
    .then(() => {
      console.log('Sign in' + auth().currentUser.uid);
      Store.dispatch(setUID(auth().currentUser.uid));
      firestore()
        .collection('Users')
        .add({
          email: email,
          id: Store.getState().userDatad,
          name: nombre,
          password: pswrd,
        })
        .then(() => {
          Store.dispatch(setName(nombre));
          Store.dispatch(setPassword(pswrd));
          Store.dispatch(setEmail(email));
        })
        .catch(e => console.log('Error de upload Data', e));
      return;
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

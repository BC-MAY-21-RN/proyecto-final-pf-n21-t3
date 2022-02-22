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
      const errorCase = {
        usedEmail: 'auth/email-already-in-use',
        invalidEmail: 'auth/invalid-email',
        userNotFound: 'auth/user-not-found',
        wrongPassword: 'auth/wrong-password',
      };
      let textAlert = '';
      switch (error.code) {
        case errorCase.usedEmail:
          textAlert = `${email} está en uso`;
          break;
        case errorCase.invalidEmail:
          textAlert = `${email} invalido, revisalo nuevamente`;
          break;
        case errorCase.userNotFound:
          textAlert = `${email} no está registrado`;
          break;
        case errorCase.wrongPassword:
          textAlert = 'La contraseña es incorrecta';
          break;
        default:
          textAlert = `${email} Error default`;
          break;
      }
      Alert.alert(textAlert);
    });
}

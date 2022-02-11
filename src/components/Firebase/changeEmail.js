import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {Store} from '../../redux/Store';

export const changeEmail = () => {
  auth()
    .currentUser.updateEmail(Store.getState().newEmail)
    .then(() => {
      Alert.alert('Email cambiado');
    })
    .catch(error => console.log(error));
};

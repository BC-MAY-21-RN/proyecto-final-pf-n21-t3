import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {Store} from '../../redux/Store';

export const resetPassword = () => {
  var user = auth().currentUser;
  user
    .updatePassword(Store.getState().userData.newPassword)
    .then(() => Alert.alert('Contraseña cambiada'))
    .catch(error => console.log(error));
};

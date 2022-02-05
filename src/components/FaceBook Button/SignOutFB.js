import {LoginManager} from 'react-native-fbsdk-next';
import {Alert} from 'react-native';
import {Store} from '../../redux/Store';
import {BackHandler} from 'react-native';
import {setEmail, setName, setPassword, setToken} from '../../redux/Actions';

export function signOutFB({navigation}) {
  Alert.alert('Cierra de sesión exitoso FB'),
    LoginManager.logOut(),
    BackHandler.removeEventListener('hardwareBackPress');
  navigation.navigate('Login'), Store.dispatch(setEmail(''));
  Store.dispatch(setName(''));
  Store.dispatch(setPassword(''));
  Store.dispatch(setToken(''));
}

import React, {useState, useEffect} from 'react';
import {Container, Boton, Logo, Texto} from '../assets/styled.js';
import {useNavigation} from '@react-navigation/native';
import {OR, InputLog, logInUser, CurrentProfile} from '../components/index';
import {Store} from '../redux/Store';
import {
  setEmail,
  setNewPassword,
  setPassword,
  setNewEmail,
} from '../redux/Actions';
import {LogInButton} from '../components/FaceBook Button/LogInButton.js';
import auth from '@react-native-firebase/auth';
import {getToken} from '../spotify/spotify_token';
import {loadData} from '../spotify/loadData';

export const Login = () => {
  const navigation = useNavigation();
  const [email, setMail] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Main'}],
        });
        CurrentProfile();
      }
    });
    getToken().catch(e => console.log('ERROR DE TOKEN', e));

    return subscribe;
  }, []);

  return (
    <Container>
      <Logo />

      <InputLog
        placeholderAdj={'Correo Electrónico'}
        name={'at'}
        value={setMail}
        onChangeText={valor => {
          Store.dispatch(setEmail(valor));
          Store.dispatch(setNewEmail(valor));
        }}
      />
      <InputLog
        placeholderAdj={'Contraseña'}
        name={'lock'}
        value={setPswrd}
        secureTextEntry={hidePassword}
        onPress={() => {
          setHidePassword(prevState => !prevState);
        }}
        onChangeText={valor => {
          Store.dispatch(setPassword(valor));
          Store.dispatch(setNewPassword(valor));
        }}
      />

      <Boton
        onPress={() => {
          logInUser();
          loadData();
        }}>
        <Texto style={{color: 'black'}}>INICIAR SESION</Texto>
      </Boton>

      <OR />
      <Boton
        BackColor={'#4B367C'}
        BColor={'#FFFFFF'}
        onPress={() => {
          navigation.navigate('Register');
        }}>
        <Texto style={{color: 'white'}}>REGISTRARSE</Texto>
      </Boton>
      <LogInButton />
    </Container>
  );
};

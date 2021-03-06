import React, {useState, useEffect} from 'react';
import {Container, Boton, Logo, Texto} from '../assets/styled.js';
import {useNavigation} from '@react-navigation/native';
import {OR, InputLog, logInUser, CurrentProfile} from '../components/index';
import {Store} from '../redux/Store';
import {setNewPassword, setNewEmail} from '../redux/Actions';
import {LogInButton} from '../components/FaceBook Button/LogInButton.js';
import auth from '@react-native-firebase/auth';
import {getToken} from '../spotify/spotify_token';
import {loadData} from '../spotify/loadData';
import {ActivityIndicator} from 'react-native';

export const Login = () => {
  const navigation = useNavigation();
  const [email, setMail] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(user => {
      if (user) {
        setIsLoading(false);
        setTimeout(function () {
          navigation.reset({
            index: 0,
            routes: [{name: 'Main'}],
          });
        }, 50);
        CurrentProfile();
      }
    });
    getToken()
      .then(() => loadData())
      .catch(e => console.log('ERROR DE TOKEN', e));
    return subscribe;
  }, []);

  return (
    <Container>
      {isLoading ? (
        <>
          <Logo />
          <InputLog
            placeholderAdj={'Correo Electrónico'}
            name={'at'}
            value={setMail}
            onChangeText={valor => {
              setMail(valor);
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
              setPswrd(valor);
              Store.dispatch(setNewPassword(valor));
            }}
          />
          <Boton
            onPress={() => {
              logInUser({email, pswrd});
            }}>
            <Texto style={{color: 'black'}}>INICIAR SESION</Texto>
          </Boton>
          <OR />
          <Boton
            BackColor={'yellow'}
            BColor={'#000000'}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Texto style={{color: 'black'}}>REGISTRARSE</Texto>
          </Boton>
          <LogInButton />
        </>
      ) : (
        <ActivityIndicator size={'large'} color={'white'} />
      )}
    </Container>
  );
};

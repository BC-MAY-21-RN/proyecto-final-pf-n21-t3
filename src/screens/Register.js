import React, {useState} from 'react';
import {Container, Boton, Logo, Texto} from '../assets/styled.js';
import {useNavigation} from '@react-navigation/native';
import {
  CheckBoxWithLabel,
  InputLog,
  createUser
} from '../components/index';
import {Textstar} from '../components/FormInput/Styled';
import {Store} from '../redux/Store.js';
import {
  setNewPassword,
  setNewEmail,
} from '../redux/Actions.js';
import {loadData} from '../spotify/loadData';

export const Register = () => {
  const navigation = useNavigation();
  const [termsCheckBox, setTermsCheckBox] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setMail] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <Container>
      <Logo />

      <InputLog
        placeholderAdj={'Nombre'}
        name={'user-alt'}
        value={setNombre}
        onChangeText={valor => {
          setNombre(valor);
        }}
      />
      <InputLog
        placeholderAdj={'Correo Electrónico'}
        name={'at'}
        value={setMail}
        onChangeText={valor => {
          setMail(valor), Store.dispatch(setNewEmail(valor));
        }}
      />
      <InputLog
        placeholderAdj={'Contraseña'}
        secureTextEntry={hidePassword}
        name={'lock'}
        value={setPswrd}
        onPress={() => setHidePassword(prevState => !prevState)}
        onChangeText={value => {
          setPswrd(value), Store.dispatch(setNewPassword(value));
        }}
      />

      <CheckBoxWithLabel value={termsCheckBox} changeValue={setTermsCheckBox} />

      <Boton
        onPress={() => {
          loadData();
          createUser({nombre, pswrd, email});
        }}>
        <Texto style={{color: 'black'}}>Registarse</Texto>
      </Boton>

      <Textstar>
        TENGO UNA CUENTA{' '}
        <Textstar
          Color={'#FFF064'}
          style={{textDecorationLine: 'underline'}}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          {' '}
          INICIAR SESION
        </Textstar>
      </Textstar>
    </Container>
  );
};

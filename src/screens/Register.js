import React, {useState} from 'react';
import {Container, Boton, Logo,  Texto} from '../assets/styled.js';
import {useNavigation} from '@react-navigation/native';
import {ImputLog} from '../components/ForImput/ImputLog';
import CheckBoxWithLabel from '../components/ForImput/Checkbox';
import {Textstar} from '../components/ForImput/Styled';

export const Register = () => {
  const navigation = useNavigation();
  const [termsCheckBox, setTermsCheckBox] = useState('');
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <Container>
      <Logo />

      <ImputLog placeholderAdj={'NOMBRE'} name={'user-alt'} value={setNombre} />
      <ImputLog placeholderAdj={'EMAIL'} name={'at'} value={setEmail}/>
      <ImputLog
        placeholderAdj={'CONTRASEÑA'}
        secureTextEntry={hidePassword}
        name={'lock'}
        value={setPswrd}
        onPress={() => setHidePassword(!hidePassword)}
      />

      <CheckBoxWithLabel value={termsCheckBox} changeValue={setTermsCheckBox} />

      <Boton
        onPress={() => {
          navigation.navigate('Main');
        }}>
        <Texto  style={{color:'black'}}>Registarse</Texto>
      </Boton>

      <Textstar>
        TENGO UNA CUENTA{' '}
        <Textstar Color={'#FFF064'} style={{textDecorationLine: 'underline'}} onPress={()=>{
          navigation.navigate('Login');
        }} >
          {' '}
          INICIAR SESION
        </Textstar>
      </Textstar>
    </Container>
  );
};

import React, {useState} from 'react';
import {Container, Boton, Logo} from '../assets/styled.js';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {ImputLog} from '../components/ForImput/ImputLog'
import CheckBoxWithLabel from '../components/ForImput/Checkbox';
import {Textstar} from '../components/ForImput/Styled'

export const Register = () => {
  const navigation = useNavigation();
  const [termsCheckBox, setTermsCheckBox] = useState('');
  //const [password, setStatePassword] = useState(false);
   return (
    <Container>
    <Logo />

    <ImputLog placeholderAdj={"NOMBRE"} name={"user-alt"}/>
    <ImputLog placeholderAdj={"EMAIL"} name={"at"}/>
    <ImputLog placeholderAdj={"CONTRASEÑA"} name={"lock"} />

    <CheckBoxWithLabel value={termsCheckBox} changeValue={setTermsCheckBox}/>

    <Boton onPress={() => {navigation.navigate('Main')}}>
      <Text style={{color:'black'}}>Registarse</Text>
    </Boton>

    <Textstar>TENGO UNA CUENTA <Textstar Color={'#FFF064'} style={{textDecorationLine: 'underline'}}> INICIAR SESION</Textstar></Textstar>
  </Container>
  );
};


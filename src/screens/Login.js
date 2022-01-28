import React, {useState} from 'react';
import {Container, Boton, Logo} from '../assets/styled.js';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {ImputLog} from '../components/ForImput/ImputLog'
import {OR} from '../components/ForImput/or'

export const Login = () => {
   const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
   const [pswrd, setPswrd] = useState('');
   const [hidePassword, setHidePassword] = useState(true);
 
   return (
    <Container>
      <Logo />
      
      <ImputLog placeholderAdj={"EMAIL"} name={"user-alt"} value={setEmail}/>
      <ImputLog placeholderAdj={"CONTRASEÑA"} name={"lock"} 
       value={setPswrd}
       secureTextEntry={hidePassword}
       onPress={() => setHidePassword(!hidePassword)}
      />

      <Boton onPress={() => {navigation.navigate('Main')}}>
        <Text style={{color:'black'}}>INICIAR SESION</Text>
      </Boton>

      <OR/>

      <Boton BackColor={'#4B367C'} BColor={'#FFFFFF'} onPress={() => {navigation.navigate('Register')}}>
        <Text style={{color:'white'}}>REGISTRARSE</Text>
      </Boton>
    </Container>
  );
};

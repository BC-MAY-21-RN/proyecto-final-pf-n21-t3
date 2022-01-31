import React ,{useState} from 'react';
import {Container, Boton, Logo, Texto} from '../assets/styled.js';
import { useNavigation } from '@react-navigation/native';
import {ImputLog} from '../components/ForImput/ImputLog'
import {OR} from '../components/ForImput/or'


export const Login = () => {
   const navigation = useNavigation();
   const [email, setEmail] = useState(''); 
   const [pswrd, setPswrd] = useState('');
   const [hidePassword, setHidePassword] = useState(true);
 
   return (
    <Container>
      <Logo />
      
      <ImputLog placeholderAdj={"Correo Electrónico"} name={"user-alt"} value={setEmail}/>
      <ImputLog placeholderAdj={"Contraseña"} name={"lock"} 
       value={setPswrd}
       secureTextEntry={hidePassword}
       onPress={() => setHidePassword(!hidePassword)}
      />

      <Boton onPress={() => {navigation.navigate('Main')}}>
        <Texto style={{color:'black'}}>INICIAR SESION</Texto>
      </Boton>
    

      <OR/>
      <Boton BackColor={'#4B367C'} BColor={'#FFFFFF'} onPress={() => {navigation.navigate('Register')}}>
        <Texto style={{color:'white'}}>REGISTRARSE</Texto>
      </Boton>
    </Container>
  );
};

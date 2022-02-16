import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import {Container, Boton, Horizontal} from '../assets/styled.js';
import {
  signOut,
  signOutFB,
  Title,
  Cardpholi,
  resetPassword,
  changeEmail,
} from '../components/index';
import {Store} from '../redux/Store.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {setEmail, setPassword} from '../redux/Actions.js';

export const Profile = () => {
  const navigation = useNavigation();
  const [EnInput, setEnInput] = useState(true);
  return (
    <Container>
      <Title Titulo={'Perfil'} />
      <Cardpholi enInput={EnInput} />
      <Horizontal>
        {Store.getState().provider.includes('facebook') ? (
          <></>
        ) : (
          <Boton
            Width={'45%'}
            onPress={() => {
              if (Store.getState().password != Store.getState().newPassword) {
                resetPassword();
                Store.dispatch(setPassword(Store.getState().newPassword));
              }
              if (Store.getState().email != Store.getState().newEmail) {
                changeEmail();
                Store.dispatch(setEmail(Store.getState().newEmail));
              } else {
                setEnInput(!EnInput);
              }
            }}>
            <Ionicons name={'create-outline'} color={'black'} size={40} />
          </Boton>
        )}

        <Boton
          Width={'45%'}
          onPress={() => {
            Store.getState().provider.includes('facebook')
              ? signOutFB({navigation})
              : signOut({navigation});
          }}>
          <Text style={{color: 'black'}}>LogOut</Text>
        </Boton>
      </Horizontal>
    </Container>
  );
};

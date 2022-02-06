import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import {Container, Boton} from '../assets/styled.js';
import {signOut, signOutFB} from '../components/index';
import {Store} from '../redux/Store.js';

export const Profile = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text style={{color: 'black'}}>ESTOY EN Profile</Text>
      <Container>
        <Boton
          onPress={() => {
            console.log(Store.getState().email),
              Store.getState().email == '' ||
              Store.getState().email == undefined
                ? signOutFB({navigation})
                : signOut({navigation});
          }}>
          <Text style={{color: 'black'}}>LogOut</Text>
        </Boton>
      </Container>
    </Container>
  );
};

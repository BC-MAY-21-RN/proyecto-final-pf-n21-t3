import { Button} from 'react-native';
import {Container, ScrlVw, Texto} from '../assets/styled.js';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Title, CardList, CardGender} from '../components/index';
import {getTracks } from '../assets/spotify/spotify_token.js';
import { Store } from '../redux/Store.js';

export function Home() {
  const navigation = useNavigation();
    return (
    <Container Padd={'0%'}>
        <Button
          onPress={() =>{ 
            getTracks(Store.getState().token, 'https://api.spotify.com/v1/browse/categories')
            
          }}
          title="Cargar generos"
        />
      <ScrlVw>
        <Title Titulo={'Bienvenido'} />
        <CardList />
        <Texto TextSize={'40px'}> Géneros</Texto>
        <CardGender />
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Ir a login"
        />
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Ir a login"
        />
      </ScrlVw>
    </Container>
  );
}

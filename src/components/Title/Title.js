import React from 'react';
import { Container, TitleText, Logo } from './Styled';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export const Title = ({ Titulo, W }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo />
      <TitleText W={W}>{Titulo}</TitleText>
      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
        style={{
          backgroundColor: 'white',
          width: 40,
          height: 40,
          borderRadius: 30,
          justifyContent: 'center',
          marginLeft: 10,
          borderColor: 'black'
        }}>
        <Ionicons
          name="search-circle-outline"
          color={'black'}
          style={{
            fontSize: 40,
          }}
        />
      </TouchableOpacity>
    </Container >
  );
};

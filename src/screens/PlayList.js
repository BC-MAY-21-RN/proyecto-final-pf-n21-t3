import {Container} from '../assets/styled.js';
import { Title } from '../components/index.js';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { ListPlay } from '../components/index.js';


export function PlayList() {
  const navigation = useNavigation();

  return (
    <Container Padd={'0%'}>
        <Title  Titulo={'Genero?'}/>
            <ListPlay />
    </Container>
  );
}
/**Meter este Boton en login para ver el mockup
 * <Boton
        BackColor={'#4B367C'}
        BColor={'#FFFFFF'}
        onPress={() => {
          navigation.navigate('PlayList');
        }}>
        <Texto style={{color: 'white'}}>Regional Mexicano</Texto>
      </Boton>
 */
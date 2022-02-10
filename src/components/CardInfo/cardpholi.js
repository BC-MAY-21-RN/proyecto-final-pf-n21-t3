import React, {useState} from 'react';
import {
  ContCard,
  SafeCard,
  ViewIcon,
  InpCon,
} from './Styled';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {InputLog} from '../index';
import {Store} from '../../redux/Store';

export const Cardpholi = ({}) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <ContCard height={'250px'}>
      <SafeCard>
        <ViewIcon>
          <Ionicons name={'person-outline'} color={'black'} size={50} />
          <Ionicons name={'mail-outline'} color={'black'} size={50} />
          <Ionicons name="lock-closed-outline" color={'black'} size={50} />
        </ViewIcon>
        <InpCon >
          <InputLog
            readOnly
            placeholderAdj={Store.getState().name}
            style={{backgroundColor: '#C8A6FF'}}
            
          />
          <InputLog
            readOnly
            placeholderAdj={Store.getState().email}
            style={{backgroundColor: '#C8A6FF'}}
          />
          <InputLog
            readOnly
            placeholderAdj={Store.getState().password}
            style={{backgroundColor: '#C8A6FF'}}
          />
        </InpCon>
      </SafeCard>
    </ContCard>
  );
};

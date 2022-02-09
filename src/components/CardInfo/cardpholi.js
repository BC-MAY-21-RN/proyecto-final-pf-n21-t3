import React from 'react';
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
            placeholderAdj={'Name'}
            style={{backgroundColor: '#C8A6FF'}}
            value={Store.getState().name}
          />
          <InputLog
            readOnly
            placeholderAdj={'Email'}
            style={{backgroundColor: '#C8A6FF'}}
            value={Store.getState().email}
          />
          <InputLog
            readOnly
            placeholderAdj={'Password'}
            secureTextEntry
            style={{backgroundColor: '#C8A6FF'}}
          />
        </InpCon>
      </SafeCard>
    </ContCard>
  );
};

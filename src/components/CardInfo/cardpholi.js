import React, {useState} from 'react';
import {ContCard, SafeCard, ViewIcon, InpCon} from './Styled';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {InputLog} from '../index';
import {Store} from '../../redux/Store';
import {setName, setNewPassword, setNewEmail} from '../../redux/Actions';

export const Cardpholi = ({enInput}) => {
  return (
    <ContCard height={'250px'}>
      <SafeCard>
        <ViewIcon>
          <Ionicons name={'mail-outline'} color={'black'} size={50} />
          <Ionicons name={'person-outline'} color={'black'} size={50} />
          <Ionicons name="lock-closed-outline" color={'black'} size={50} />
        </ViewIcon>
        <InpCon>
          <InputLog
            readOnly={enInput}
            placeholderAdj={
              Store.getState().userData.provider.includes('facebook')
                ? 'Email vinculado a FaceBook'
                : Store.getState().userData.email
            }
            onChangeText={valor => {
              Store.dispatch(setNewEmail(valor));
            }}
            style={{backgroundColor: '#C8A6FF'}}
            size={'15px'}
            multiline
          />
          <InputLog
            readOnly={enInput}
            placeholderAdj={Store.getState().userData.name}
            style={{backgroundColor: '#C8A6FF'}}
            onChangeText={valor => {
              Store.dispatch(setName(valor));
            }}
          />
          <InputLog
            readOnly={enInput}
            placeholderAdj={
              Store.getState().userData.provider.includes('facebook')
                ? 'Contraseña vinculada a FaceBook'
                : Store.getState().userData.password
            }
            style={{backgroundColor: '#C8A6FF'}}
            onChangeText={valor => {
              Store.dispatch(setNewPassword(valor));
            }}
            multiline
            size={'13px'}
          />
        </InpCon>
      </SafeCard>
    </ContCard>
  );
};

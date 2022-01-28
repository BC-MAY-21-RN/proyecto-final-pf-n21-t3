import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {InpCon, Input, Image} from './Styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

export function ImputLog(props) {
  return (
    <InpCon>
      <Icon name={props.name} size={30} color={'black'} />
      <Input
        keyboardType={null}
        placeholder={props.placeholderAdj}
        secureTextEntry={props.secureTextEntry}
        onChangeText={valor => {
          props.value(valor);
        }}
      />
      {/*<TouchableOpacity onPress={props.onPress}>
        <Image
          source={
            props.secureTextEntry
              ? require('../../assets/img/ver.png')
              : require('../../assets/Img/ojo.png')
          
        />
      </TouchableOpacity>}*/}
    </InpCon>
  );
}

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Login, Register, Liked} from '../../screens/index';
import TabNavigator from './TabNavigator'

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Main" component={TabNavigator}/>
      <Stack.Screen name="Liked" component={Liked}/>
    </Stack.Navigator>
  );
};

export default Navigator;

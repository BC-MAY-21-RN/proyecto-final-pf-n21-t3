 import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../../screens/Profile'
import Register from '../../screens/Home';
import Profile from '../../screens/Profile'

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <>
      <Tab.Navigator initialRouteName='Login'>
        <Tab.Screen name='Home' component={Login} />
        <Tab.Screen name='My Library' component={Register} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    </>
  );
};

export default Navigator;

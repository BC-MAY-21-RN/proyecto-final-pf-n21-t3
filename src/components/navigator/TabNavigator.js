import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, Library} from '../../screens/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  //45366D
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarInactiveBackgroundColor: '#FFF064',
          tabBarActiveBackgroundColor: '#FFF064',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({size, color, focused}) => {
              focused ? (color = '#45366D') : (color = 'black');
              return <Ionicons name="home" color={color} size={size} />;
            },
          }}
        />

        <Tab.Screen
          name="My Library"
          component={Library}
          options={{
            tabBarIcon: ({size, color, focused}) => {
              focused ? (color = '#45366D') : (color = 'black');
              return (
                <FontAwesome5 name="compact-disc" color={color} size={size} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({size, color, focused}) => {
              focused ? (color = '#45366D') : (color = 'black');
              return <FontAwesome5 name="user-alt" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default TabNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ProfileScreens, LibraryScreens, HomeScreens} from './index';
import { ProfileScreens, LibraryScreens, HomeScreens } from './index';
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarInactiveBackgroundColor: '#b8dbd9',
          tabBarActiveBackgroundColor: '#b8dbd9',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreens}
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              focused ? (color = '#586f7c') : (color = 'black');
              return <Ionicons name="home" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="My Library"
          component={LibraryScreens}
          options={{

            tabBarIcon: ({size, color, focused}) => {
              
              focused ? (color = '#45366D') : (color = 'black');

            tabBarIcon: ({ size, color, focused }) => {
              focused ? (color = '#586f7c') : (color = 'black');

              return (
                <FontAwesome5 name="compact-disc" color={color} size={size}/>
              );
            },
    
          }}
        />
        <Tab.Screen
          name="My Profile"
          component={ProfileScreens}
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              focused ? (color = '#586f7c') : (color = 'black');
              return <FontAwesome5 name="user-alt" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}
export default TabNavigator;

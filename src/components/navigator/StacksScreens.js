import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  PlayList,
  Tracks,
  Liked,
  Library,
  Profile,
  Home,
} from '../../screens/index';

const Stack = createNativeStackNavigator();

export const LibraryScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Library"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Liked" component={Liked} />
      <Stack.Screen name="Library" component={Library} />
      <Stack.Screen name="Tracks" component={Tracks} />
    </Stack.Navigator>
  );
};

export const ProfileScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export const HomeScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="FirstPage" component={Home} />
      <Stack.Screen name="PlayList" component={PlayList} />
    </Stack.Navigator>
  );
};

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  PlayList,
  Tracks,
  Liked,
  Library,
  Profile,
  Home,
  Player,
  Search
} from '../../screens/index';

const Stack = createNativeStackNavigator();

export const LibraryScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Library"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Liked" component={Liked} />
      <Stack.Screen name="Library" component={Library} />
      <Stack.Screen name="Player" component={Player} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export const ProfileScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export const HomeScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="FirstPage" component={Home} />
      <Stack.Screen name="PlayList" component={PlayList} />
      <Stack.Screen name="Tracks" component={Tracks} />
      <Stack.Screen name="Player" component={Player} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

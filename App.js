import React from 'react';
import Navigator from './src/components/navigator/Navigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
     <NavigationContainer>
      <Navigator />
    </NavigationContainer> 
  );
};

export default App;

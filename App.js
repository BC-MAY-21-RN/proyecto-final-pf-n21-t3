import React from 'react';
import Navigator from './src/components/navigator/Navigator';
import {NavigationContainer} from '@react-navigation/native';
import { Store } from './src/redux/Store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer> 
    </Provider>
  );
};

export default App;

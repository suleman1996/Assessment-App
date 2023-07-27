import React from 'react';
import Stack from './src/stack';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { Store } from './src/store/store';

const App: React.FC<JSX.Element> = () => {

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </Provider>
  )
}

export default App;

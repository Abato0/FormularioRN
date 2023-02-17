import React from 'react';
import {Text, View} from 'react-native';
import { NavigatorGeneral } from './src/navigator/NavigatorGeneral';
import {NavigationContainer} from '@react-navigation/native';
function App(): JSX.Element {
  return (
    <NavigationContainer>
       <NavigatorGeneral />
    </NavigationContainer>
  );
}

export default App;

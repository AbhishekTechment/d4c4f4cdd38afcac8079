/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen
       name = "Home"
       component = {HomeScreen}
       options = {{title: 'Home Screen' }} />
        <Stack.Screen
       name = "Detail"
       component = {DetailScreen}
       options = {{title: 'Detail Screen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

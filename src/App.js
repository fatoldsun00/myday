/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home'
import BackgroundTask from 'react-native-background-task'
 
BackgroundTask.define(() => {
  console.log('Hello from a background task')
  BackgroundTask.finish()
})

const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(()=>{
    BackgroundTask.schedule()
  },[])

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;

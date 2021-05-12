import { StatusBar } from 'expo-status-bar';
import React, { container} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LandingScreen from './components/auth/Landing'

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName = "Landing">
        <stack.Screen name = "landing" component = {LandingScreen} options = {{headerShown: false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

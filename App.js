import { StatusBar } from 'expo-status-bar';
import React, { container} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyC3Kqi8Afv1gvxXSeJlDFmhHi3TAIHEhx0",
  authDomain: "test-app-2-2a63d.firebaseapp.com",
  projectId: "test-app-2-2a63d",
  storageBucket: "test-app-2-2a63d.appspot.com",
  messagingSenderId: "534484245035",
  appId: "1:534484245035:web:751030a6e800ece57ce86e",
  measurementId: "G-RWN93QGL6P"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}


import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'


const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName = "Landing">
        <stack.Screen name = "landing" component = {LandingScreen} options = {{headerShown: false}}/>
        <stack.Screen name = "Register" component = {RegisterScreen} />
        <stack.Screen name = "Login" component = {LoginScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

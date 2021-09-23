import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, YellowBox, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase/app'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducers from './redux/reducers'
import thunk from 'redux-thunk' 

const firebaseConfig = {
  
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

//YellowBox.ignoreWarnings('message that is to be ignored')  this line of code is to ignore the warning that appears there

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'
import RightScreen from './components/auth/Register'
import mainScreen from './components/main'
import cameraScreen from './components/main/camera'
import saveScreen from './components/main/save'


const store = createStore(rootReducers, applyMiddleware(thunk))

const stack = createStackNavigator();

export class App extends Component {

  constructor(props){
    super(props) 
    this.state = {
      loaded : false,
    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(!user){
        this.setState({
          loggedin: false,
          loaded: true
        })
      }
      else{
        this.setState({
          loggedin : true,
          loaded: true
        })
      }
    })
  }
  render() {
    const {loaded, loggedin} = this.state;
    if(!loaded){
      return(
        <View style={{flex:1, justifyContent:'center'}}>
          <Text>
            loading.........
          </Text>
        </View>
      )
    }
    if(!loggedin){
      return (
        <NavigationContainer>
          <stack.Navigator initialRouteName = "Landing">
            <stack.Screen name = "landing" component = {LandingScreen} options = {{headerShown: false}}/>
            <stack.Screen name = "Register" component = {RegisterScreen} />
            <stack.Screen name = "Login" component = {LoginScreen} />
          </stack.Navigator>
        </NavigationContainer>
      )
    }
    return(
      <Provider store = {store}>
        <NavigationContainer>
        <stack.Navigator initialRouteName = "main">
          <stack.Screen name = "main" component = {mainScreen} options = {{headerShown: false}}/>
          <stack.Screen name = "camera" component = {cameraScreen} navigation = {this.props.navigation}/>
          <stack.Screen name = "save" component = {saveScreen} navigation = {this.props.navigation}/>
        </stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
    
  }
}

export default App


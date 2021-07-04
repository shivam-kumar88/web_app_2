import React, { Component } from 'react'
import {View, Text} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from 'react-native-vector-icons'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUser, fetchUserpost} from '../redux/action/index'

import FeedScreen from './main/Feed'
import chatScreen from './main/chat'
import profileScreen from './main/profile'



const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => {
    return(null)
}

export class main extends Component {
    componentDidMount(){
        this.props.fetchUser();
        this.props.fetchUserpost();
    }
    render() {
        return(
            <Tab.Navigator initialRouteName = "Feed" labeled = {false} barStyle={{ backgroundColor: 'gray' }}> 
                <Tab.Screen 
                    name="Home" 
                    component={FeedScreen}
                    options={{
                        tabBarIcon:({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26}/>
                        ) 
                    }}/>
                <Tab.Screen name="images" component={EmptyScreen} 
                listeners = {({ navigation })=>({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("camera")
                    }
                })}
                options={{
                    tabBarIcon:({ color, size }) => (
                        <MaterialCommunityIcons name="camera" color={color} size={26}/>
                    )
                }}/>
                <Tab.Screen name="Chat" component={chatScreen} 
                options={{
                    tabBarIcon:({ color, size }) => (
                        <MaterialCommunityIcons name="chat" color={color} size={26}/>
                    )
                }}/>
                <Tab.Screen name="Profile" component={profileScreen} 
                options={{
                    tabBarIcon:({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26}/>
                    )
                }}/>
            </Tab.Navigator>
        )
    }
}

const mapStateToprops = (Store) => ({
    currentUser: Store.userState.currentUser
})

const mapDispachprops = (dispatch)=> bindActionCreators({fetchUser, fetchUserpost}, dispatch);
export default connect(mapStateToprops, mapDispachprops)(main);

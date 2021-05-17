import React, { Component } from 'react'
import {View, Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from 'react-native-vector-icons'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUser} from '../redux/action/index'

import FeedScreen from './main/Feed'
import chatScreen from './main/chat'
import profileScreen from './main/profile'


const Tab = createBottomTabNavigator();

const EmptyScreen = () => {
    return(null)
}

export class main extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        return(
            <Tab.Navigator initialRouteName = "Feed"> 
                <Tab.Screen 
                    name="Home" 
                    component={FeedScreen}
                    options={{
                        tabBarIcon:({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={28}/>
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
                        <MaterialCommunityIcons name="camera" color={color} size={28}/>
                    )
                }}/>
                <Tab.Screen name="Chat" component={chatScreen} 
                options={{
                    tabBarIcon:({ color, size }) => (
                        <MaterialCommunityIcons name="chat" color={color} size={28}/>
                    )
                }}/>
                <Tab.Screen name="Profile" component={profileScreen} 
                options={{
                    tabBarIcon:({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={28}/>
                    )
                }}/>
            </Tab.Navigator>
        )
    }
}

const mapStateToprops = (Store) => ({
    currentUser: Store.userState.currentUser
})

const mapDispachprops = (dispatch)=> bindActionCreators({fetchUser}, dispatch);
export default connect(mapStateToprops, mapDispachprops)(main);
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Button, Text } from 'react-native'



const stack = createStackNavigation();

export default function Landing() {
    return (
        <View style = {{flex :1, justifyContent: 'center'}}>
            <Button 
            title = "register"
            onPress = {() => navigation.navigate("Register")}
            />
            <Button 
            title = "login"
            onPress = {() => navigation.navigate("login")}
            />
        </View>
    )
}

import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Button, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'



export default function Landing({navigation}) {
    return (
        <View style = {styles.container}>
            <ImageBackground style={styles.image} source={}>
            <TouchableOpacity style={styles.buttonContainer1} onPress = {() => navigation.navigate("Register")}>
                <Text> Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer2}  onPress = {() => navigation.navigate("Login")}>
                <Text> Login</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
    },
    buttonContainer1: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#90ee90",
    },
    buttonContainer2: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#90ee90",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    
})
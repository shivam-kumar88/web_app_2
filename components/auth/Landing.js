import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Button, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'

const img = { uri: "https://images.unsplash.com/photo-1557683325-3ba8f0df79de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80" };

export default function Landing({navigation}) {
    return (
        <ImageBackground style={styles.image} source={img}>
        <View style = {styles.container}>
            <Text style = {styles.text}>Welcome</Text>
            <TouchableOpacity style={styles.buttonContainer1} onPress = {() => navigation.navigate("Register")}>
                <Text style={styles.text}> Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer2}  onPress = {() => navigation.navigate("Login")}>
                <Text style={styles.text}> Login</Text>
            </TouchableOpacity>
            
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        //backgroundGradient: "vertical",
        //backgroundGradientTop: "#333333",
        //backgroundGradientBottom: "#666666"
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
    buttonContainer2
    : {
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
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'black'
    }
    
})
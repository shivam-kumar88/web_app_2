import React from 'react'
import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity, ImageBackground} from 'react-native'

const img = {uri: "https://images.unsplash.com/photo-1614853035846-77b0a40a6b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"};

export default function chat() {
    return (
        <ImageBackground style = {styles.image} source={img}>
        <View style = {styles.container}>
            <TextInput style={styles.input} placeholder="Enter your message here"  />
            <TouchableOpacity style= {styles.buttonContainer} onPress={()=> null} >
            <Text>send</Text> 
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
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'black',
    },
    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00fa9a",
      },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
})
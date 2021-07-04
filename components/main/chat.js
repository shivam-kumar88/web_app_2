import React from 'react'
import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native'

export default function chat() {
    return (
        <View style = {styles.container}>
            <TextInput style={styles.input} placeholder="Enter your message here"  />
            <TouchableOpacity style= {styles.buttonContainer} onPress={()=> null} >
            <Text>send</Text> 
            </TouchableOpacity>
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
})
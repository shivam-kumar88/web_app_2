import React, { useState, useCallback, useEffect } from 'react'
import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity, ImageBackground} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'

const img = {uri: "https://images.unsplash.com/photo-1522886595859-a3ae7588ff14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"};

export default function chat() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello friend its shivam',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'shivam',
              avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            },
            
          },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <ImageBackground style={styles.image} source={img}>
        <GiftedChat
        messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}/>
    
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
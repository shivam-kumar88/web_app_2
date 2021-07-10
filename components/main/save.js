import React, { useState } from 'react'
import {View, TextInput, Button, Image, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native'
import firebase from 'firebase'
require("firebase/firestore")
require("firebase/firebase-storage")

const img = {uri : "https://images.unsplash.com/photo-1524408504872-4d40d453c67f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"};

export default function save(props, { navigation }) {
    console.log(props.route.params.image)

    const[caption, setCaption] = useState(" ")

    const childPath = `post/ ${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;
    console.log(childPath)

    const uploadImage = async() => {
        const uri = props.route.params.image;
        const responce = await fetch(uri);

        const blob = await responce.blob();

        const task = firebase
            .storage()
            .ref()
            .child(childPath)
            .put(blob)

        const taskProgress = snapshot => {
            console.log(`transfered:${snapshot.bytesTransferred}`)
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot)=>{
                savePostData(snapshot);
                console.log(snapshot)
            })
        }

        const taskError = snapshot => {
            console.log(snapshot)
        }

        task.on("state_Changed", taskProgress, taskError, taskCompleted);

    }

    const savePostData = (downloadURL) => {
        firebase.firestore()
            .collection("posts")
            .doc(firebase.auth().currentUser.uid)
            .collection("userPost")
            .add({
                downloadURL,
                caption,
                creation:firebase.firestore.FieldValue.serverTimestamp()
            })
            .then((function(){
                props.navigation.popToTop()
            }))
    }


    return (
        <ImageBackground style={styles.image} source={img}>
        <View style = {styles.container}>
            <Image source = {{uri:props.route.params.image}}/>
            
            <TextInput style={styles.input} placeholder="Enter your message here" onChangeText={(caption)=>setCaption(caption)}/>
            <TouchableOpacity style = {styles.buttonContainer1} onPress = {() => uploadImage()}>
                <Text>upload</Text>
            </TouchableOpacity>

        </View>
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
    buttonContainer1: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#50e38f",
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'white',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
})
import React, { useState } from 'react'
import {View, TextInput, Button, Image } from 'react-native'
import firebase from 'firebase'
require("firebase/firestore")
require("firebase/firebase-storage")

export default function save(props) {
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
                console.log(snapshot)
            })
        }

        const taskError = snapshot => {
            console.log(snapshot)
        }

        task.on("state_Changed", taskProgress, taskError, taskCompleted);

    }
    return (
        <View style = {{flex:1}}>
            <Image source = {{uri:props.route.params.image}}/>
            <TextInput
            placeholder="Write any caption."
            onChangeText={(caption)=>setCaption(caption)}/>
            <Button
            title="upload image"
            onPress = {() => uploadImage()}/>

        </View>
    )
}

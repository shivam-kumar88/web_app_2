import React, { useState } from 'react'
import {View, TextInput, Button, Image } from 'react-native'
import firebase from 'firebase'
require("firebase/firestore")
require("firebase/firebase-storage")

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

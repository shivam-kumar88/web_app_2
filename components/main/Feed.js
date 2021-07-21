import React from 'react'
import { StatusBar } from 'react-native';
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

const img = {uri : "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"};

export default function Feed() {
    return (
        //<StatusBar barStyle="dark-content"/>
        <ImageBackground style = {styles.image} source = {img}>
        <View style = {styles.body}>
            <View style={styles.bodyContent}>
                <Text style={styles.info}>the feed page is currently in development </Text>
                <Text style = {styles.name}>By shivam kumar</Text>
                <Text style = {styles.description}> this app is still in progress once i am done with rest of three tabs i will work on this feed tab.</Text>
            </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    body:{
        marginTop:40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
    },
    description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
    },
    name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
    },
    info:{
        fontSize:26,
        color: "red",
        alignItems: 'center',
        marginTop:10
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
})

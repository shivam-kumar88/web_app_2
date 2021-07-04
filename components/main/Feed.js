import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Feed() {
    return (
        <View style = {styles.body}>
            <View style={styles.bodyContent}>
                <Text style={styles.info}>the feed page is currently in development </Text>
                <Text style = {styles.name}>By shivam kumar</Text>
                <Text style = {styles.description}> this app is still in progress once i am done with rest of three tabs i will work on this feed tab.</Text>
            </View>
        </View>
        
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
        marginTop:200
    },
})

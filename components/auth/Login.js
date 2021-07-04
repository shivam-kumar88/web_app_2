import React, { Component } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import firebase from 'firebase'

export class Login extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            email: '',
            password: '',
        }
        this.onSignin = this.onSignin.bind(this)
    }
    onSignin(){
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)

        .then((result)=>{
            console.log(result)
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    render() {
        return (
            <View style = {styles.container}>
                <TextInput
                style = {styles.input}
                placeholder = "email"
                onChangeText = {(email) => this.setState({email})}/>
                <TextInput
                style = {styles.input}
                placeholder = "password"
                secureTextEntry = {true}
                onChangeText = {(password) => this.setState({password})}/>
                <TouchableOpacity style = {styles.buttonContainer1} onPress = {() => this.onSignin()}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
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
        backgroundColor: "#87cefa",
    },
    
})

export default Login

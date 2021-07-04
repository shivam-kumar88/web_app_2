import React, { Component } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import firebase from 'firebase'

export class Register extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }
    onSignUp(){
        const {email, password, name} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)

        .then((result)=>{
            firebase.firestore().collection("user")
            .doc(firebase.auth().currentUser.uid)
            .set({
                name,
                email
            })
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
                placeholder = "name"
                onChangeText = {(name) => this.setState({name})}/>
                <TextInput
                style = {styles.input}
                placeholder = "email"
                onChangeText = {(email) => this.setState({email})}/>
                <TextInput
                style = {styles.input}
                placeholder = "password"
                secureTextEntry = {true}
                onChangeText = {(password) => this.setState({password})}/>
                <TouchableOpacity style={styles.buttonContainer1} onPress = {() => this.onSignUp()}>
                    <Text>Register</Text>
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
        backgroundColor: "#48d1cc",
    },
    
})

export default Register

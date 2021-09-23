import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'



import {USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE} from '../constant/index'

export function fetchUser(){
    return((dispatch) => {
        firebase.firestore()
            .collection("user")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot)=>{
                console.log(snapshot.docs)
                /*if(snapshot.exists()) {
                    dispatch({type:USER_STATE_CHANGE, currentUser:snapshot.data()})
                }
            else{
                console.log("does not exist")
                
            }*/
        })
    })
}




export function fetchUserpost(){
    return((dispatch) => {
        firebase.firestore()
        .collection("posts")
        .doc(firebase.auth().currentUser.uid)
        .collection("userPost")
        .orderBy("creation", "asc")
        .get()
        .then((snapshot)=>{
            let posts = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return {id, ...data}
            })
            dispatch({type:USER_POSTS_STATE_CHANGE, posts })
            console.log(snapshot.docs)
            
        })
    })
}

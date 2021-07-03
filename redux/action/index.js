import firebase from 'firebase'
import {USER_STATE_CHANGE} from '../constant/index'

export function fetchUser(){
    return((dispach) => {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot)=>{
            if (snapshot.exists) {
                dispatch({type:USER_STATE_CHANGE, currentUser:snapshot.data()})
            }
            else{
                console.log("does not exist")
            }
        })
    })
}

export function fetchUserpost(){
    return((dispach) => {
        firebase.firestore()
        .collection("posts")
        .doc(firebase.auth().currentUser.uid)
        .collection("userposts")
        .orderBy("creation", "asc")
        .get()
        .then((snapshot)=>{
            console.log(snapshot.docs)
            }
        )
    })
}

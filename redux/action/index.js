import firebase from 'firebase'
import {USER_STATE_CHANGE} from '../constant/index'

export function fetchUsers(){
    return((dispach) => {
        firebase.firestore()
        .collection("user")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((Snapshot)=>{
            if (Snapshot.exists) {
                dispach({type:USER_STATE_CHANGE, currentUser:Snapshot.data()})
            }
            else{
                comsole.log("does not exist")
            }
        })
    })
}

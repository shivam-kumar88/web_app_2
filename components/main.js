import React, { Component } from 'react'
import {View, Text} from 'react-native'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUser} from '../redux/action/index'

export class main extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        const {currentUser} = this.props;
        if (currentUser==undefined) {
            return(
                <View></View>
            )
        }
        else{
            console.log("undefined")
        }
        console.log(currentUser)
    }
}

const mapStateToprops = (Store) => ({
    currentUser: Store.userState.currentUser
})

const mapDispachprops = (dispatch)=> bindActionCreators({fetchUser}, dispatch);
export default connect(mapStateToprops, mapDispachprops)(main);

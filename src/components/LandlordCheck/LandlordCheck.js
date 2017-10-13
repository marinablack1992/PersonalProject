import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getUserInfo, setUser} from './../../ducks/reducer.js'

class LandlordCheck extends Component {

componentDidMount(){
    
   this.props.getUserInfo()
   
}

componentWillReceiveProps(newProps){
    if (newProps.user.status === 'Landlord'){
        this.props.history.push('/l/dashboard')
    } else if (newProps.user.status === 'Tenant'){
        this.props.history.push('/t/dashboard')
    }
}

render(){
  const user = this.props.user
  
    return (
        <div>
            <button value={"Landlord"} onClick = {(e)=>this.props.setUser(user.id, e.target.value)}>Landlord</button>
            <button value={"Tenant"} onClick = {(e)=>this.props.setUser(user.id, e.target.value)}>Tenant</button>
        </div>
    )
}
}

function mapStateToProps(state){
    return {
        user: state.user,
        newUser: state.newUser
    }
}

let outActions = {
    getUserInfo: getUserInfo,
    setUser: setUser
}

export default connect(mapStateToProps, outActions)(LandlordCheck)


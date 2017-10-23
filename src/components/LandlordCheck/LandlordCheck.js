import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getUserInfo, setUser} from './../../ducks/reducer.js'
import { Link } from 'react-router-dom'

class LandlordCheck extends Component {

componentDidMount(){
    
   this.props.getUserInfo()
   
}

componentWillReceiveProps(newProps){
    if (newProps.user.status === 'Landlord'){
        this.props.history.push('/ldashboard')
    } else if (newProps.user.status === 'Tenant'){
        this.props.history.push('/tdashboard')
    }
}

render(){
  const user = this.props.user
  
    return (
        <div>
            <Link to='/ldashboard'><button value={"Landlord"} onClick = {(e)=>this.props.setUser(user.id, e.target.value)}>Landlord</button></Link>
            <Link to='tdashboard'><button value={"Tenant"} onClick = {(e)=>this.props.setUser(user.id, e.target.value)}>Tenant</button></Link>
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


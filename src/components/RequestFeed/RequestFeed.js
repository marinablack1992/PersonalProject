import React, { Component } from 'react';
import Request from './Request/Request.js'
import NavBar from './../NavBar/NavBar.js'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { getUsersPropsReqs } from './../../ducks/reducer.js'

class RequestFeed extends Component {

    componentDidMount(){
        this.props.getUsersPropsReqs();
    }

    render() {
        console.log(this.props.usersPropsReqs)
        return (
            <div className='container'>
                <NavBar />
                <h1>Requests for Property</h1>
                {this.props.usersPropsReqs.map((request, i) => <Request key={i} request={request} />)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user,
        usersPropsReqs: state.usersPropsReqs
    }
}

export default connect(mapStateToProps, { getUsersPropsReqs })(RequestFeed)

//{this.props.userProps.map((property, i) => <Property key={i} property={property} />)}
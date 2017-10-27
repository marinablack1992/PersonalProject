import React, { Component } from 'react';
import Request from './Request/Request.js'
import NavBar from './../NavBar/NavBar.js'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class RequestFeed extends Component {
    render() {
        return (
            <div className='container'>
                <NavBar />
                <h1>Requests for Property</h1>
                <Request />
            </div>
        )
    }
}

export default connect(RequestFeed)

//{this.props.userProps.map((property, i) => <Property key={i} property={property} />)}
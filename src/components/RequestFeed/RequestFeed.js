import React, { Component } from 'react';
import Request from './Request/Request.js'
import NavBar from './../NavBar/NavBar.js'
import {Link} from 'react-router-dom'

class RequestFeed extends Component {
    render() {
        return (
            <div className='container'>
                <NavBar />
                <h1>Requests for Property</h1>
                <Link to='/addreq'><button>Add Request</button></Link>
                <Request />
            </div>
        )
    }
}

export default RequestFeed
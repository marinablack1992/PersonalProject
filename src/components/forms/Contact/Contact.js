import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Contact extends Component {
    render(){
        return (
            <div className='container'>
                <Link to='/dashboard'><button>x</button></Link>
                <div>Phone
                <input></input></div>
                <div>Email
                <input></input></div>
                <div>Preferred Contact Method
                <button>Drop Menu</button></div>
                <button>+</button>
            </div>
        )
    }
}

export default Contact
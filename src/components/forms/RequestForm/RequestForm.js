import React, { Component } from 'react';
import NavBar from './../../NavBar/NavBar.js';
import { Link } from 'react-router-dom';


class RequestForm extends Component {
    render() {
        return (
            <div className='container'>
                <NavBar />

                <div className='form'>
                    <Link to='/requests'><button>x</button></Link>
                    <h1>Request</h1>
                    <div className='renderImg'></div>
                    <div>Image (Optional) <input></input></div>
                    <div>Description <input></input></div>
                    <div>Priority <button>Drop Menu</button></div>
                </div>
                <button>+</button>
            </div>
        )
    }
}

export default RequestForm
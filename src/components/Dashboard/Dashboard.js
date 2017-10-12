import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from './../NavBar/NavBar.js'
import Property from './../Property/Property.js';

class Dashboard extends Component {
    render() {
        return (
            <div className='container'>
                <NavBar/>
                <h1>My Properties</h1>
                <Property /> 
                <Link to='/contact'><button>Edit Contact Preferences</button></Link>
                <Link to='/addprop'><button>+</button></Link>
            </div >
        )
    }
}

export default Dashboard
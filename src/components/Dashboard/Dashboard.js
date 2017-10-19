import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from './../NavBar/NavBar.js'
import Property from './../Property/Property.js';
import { connect } from 'react-redux'


class Dashboard extends Component {

    componentWillReceiveProps(newProps) {
        console.log(!newProps.user)
        if (!newProps.user) {
            this.props.history.push('/')
        }
    }
    
    render() {
        return (
            <div className='container'>
                <NavBar />
                <h1>My Properties</h1>
                <Property />
                <Link to='/contact'><button>Edit Contact Preferences</button></Link>
                <Link to='/addprop'><button>+</button></Link>
            </div >
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Dashboard)
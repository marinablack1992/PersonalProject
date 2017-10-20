import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from './../NavBar/NavBar.js'
import Property from './../Property/Property.js';
import { connect } from 'react-redux'
import { getUserProperties, getUserPropsTens } from './../../ducks/reducer.js';


class Dashboard extends Component {
    
    componentDidMount() {
        this.props.getUserProperties(this.props.user.id)
    }

    componentWillReceiveProps(newProps) {
        console.log(!newProps.user)
        if (!newProps.user) {
            this.props.history.push('/')
        }
    }
    
    render() {
        console.log('user mounted to dash', this.props.user)
        return (
            <div className='container'>
                <NavBar />
                <h1>My Properties</h1>
                {this.props.userProps.map((property, i) => <Property key={i} property={property} />)}
                <Link to='/contact'><button>Edit Contact Preferences</button></Link>
                <Link to='/addprop'><button>+</button></Link>
            </div >
        )
    }
}

function mapStateToProps(state){
    return {
        userProps: state.userProps,
        user: state.user 
    }
}

export default connect(mapStateToProps, { getUserProperties, getUserPropsTens })(Dashboard)
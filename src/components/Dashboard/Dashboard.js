import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from './../NavBar/NavBar.js'
import Property from './../Property/Property.js';
import { connect } from 'react-redux'
import { getUserProperties } from './../../ducks/reducer.js'
import './Dashboard.css'


class Dashboard extends Component {

    componentDidMount() {
        this.props.getUserProperties()
    }

    componentWillReceiveProps(newProps) {
        console.log(!newProps.user)
        if (!newProps.user) {
            this.props.history.push('/')
        }
    }

    render() {
        console.log('ldash userprops', this.props.userProps)
        return (
            <div className='ldash_outer-container'>
                <NavBar />
                <div className='ldash_container'>
                    <div className='ldash_mid-container'>
                        <div className='ldash_header'>
                            <h1>My Properties</h1>
                        </div>
                        <div className='ldash_prop-container'>
                            {this.props.userProps.map((property, i) => <Property key={i} property={property} />)}
                        </div>
                    </div >
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userProps: state.userProps,
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserProperties })(Dashboard)
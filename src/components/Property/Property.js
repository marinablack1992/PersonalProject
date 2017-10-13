import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUserProperties } from './../../ducks/reducer.js';

class Property extends Component {

    componentDidMount() {
        this.props.getUserProperties(this.props.user.id)
    }

    render() {
        console.log('property', this.props)
        return (
            <div className='container'>
                <div className='propertyoptions'>
                    <div>Add Tenant</div>
                    <div>Edit Tenant</div>
                    <div>Delete Tenant</div>
                    <div>Edit Property</div>
                    <div>Delete Property</div>

                    <div>
                    </div>
                </div>

                <div>
                    <Link to='requests'><button>Manage Requests</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        userProps: state.userProps,
        user: state.user
        }
}

export default connect(mapStateToProps, { getUserProperties })(Property)
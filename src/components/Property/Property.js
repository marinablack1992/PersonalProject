import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUserProperties } from './../../ducks/reducer.js';
import './Property.css';

class Property extends Component {


    render() {
        return (
            <div className='property_main'>
                <div className='property_container'>
                    <div className='property_nav'>
                        <Link className='property_addtenant' to='/addtenant'><div>Add Tenant</div></Link>
                        <Link className='property_edit' to={`/editprop/${this.props.property.id}`}><div>Edit Property</div></Link>
                        <div>Delete Property</div>
                    </div>

                    <div className='property_info'>
                        <img className='property_image' src={this.props.property.imageurl} />
                        <div className='property_columnA'>
                            <div className='property_address'><u>Address</u><br />{this.props.property.address}</div>
                            <div className='property_rent'><u>Rent</u><br />{this.props.property.monthly_rent}</div>
                            </div>
                            <div className='property_columnB'>
                            <div className='property_tenant'><u>Tenant</u><br /> {this.props.property.tenant_email}</div>
                            <div className='property_lease'><u>Lease Expiration</u><br />{this.props.property.lease_exp}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userProps: state.userProps,
        user: state.user,
    }
}

export default Property
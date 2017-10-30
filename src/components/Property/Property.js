import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUserProperties, deleteProperty } from './../../ducks/reducer.js';
import './Property.css'

class Property extends Component {


    render() {
        console.log(this.props.property)
        return (
            <div className='property_outer-container'>
                <div className='property_container'>
                    <div className='property_nav'>
                        <Link className='property_link' to={`/addtenant/${this.props.property.id}`}>Add Tenant</Link>
                        <Link className='property_link' to={`/editprop/${this.props.property.id}`}>Edit Property</Link>
                        <div className='property_link' onClick={() => { this.props.deleteProperty(this.props.property.id), alert('Your property has been deleted.') }}>Delete Property</div>
                    </div>

                    <div className='property_info'>
                        <img className='property_image' src={this.props.property.imageurl} />

                        <div className='property_column'>

                            <div className='property_category'>
                                <h1>Address</h1>
                                <div className='property_data'>
                                    {this.props.property.address}
                                </div>
                            </div>

                            <div className='property_category'>
                                <h1>Rent</h1>
                                <div className='property_data'>
                                    {this.props.property.monthly_rent}
                                </div>
                            </div>
                        </div>

                        <div className='property_column'>

                            <div className='property_category'>
                                <h1>Tenant</h1>
                                <div className='property_data'>
                                    {this.props.property.tenant_email}
                                </div>
                            </div>

                            <div className='property_category'>
                                <h1>Lease Expiration</h1>
                                <div className='property_data'>
                                    {this.props.property.lease_exp}
                                </div>
                            </div>
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

export default connect(mapStateToProps, { getUserProperties, deleteProperty })(Property)
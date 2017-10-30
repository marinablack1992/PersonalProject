import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import NavBar from './../../NavBar/NavBar.js';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUsersProps } from './../../../ducks/reducer.js';
import Property from './../../Property/Property.js';
import './TenantDash.css';
import { Link } from 'react-router-dom'

class TenantDash extends Component {
    constructor() {
        super();

        this.state = {
            imageurl: '',
            address: '',
            monthlyrent: 0,
            lease: '',
            landlord: '',
            landEmail: '',
            landPhone: '',
            prefcontact: ''
        }

    }


    componentDidMount() {
        this.props.getUsersProps();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.propsUsers.length) {
            var property = newProps.propsUsers.filter((e, i, arr) => {
                if (this.props.user.email == e.tenant_email) {
                    return e
                }
            })
            console.log('after filter', property[0])

            this.setState({
                imageurl: property[0].imageurl,
                address: property[0].address,
                monthlyrent: property[0].monthly_rent,
                lease: property[0].lease_exp,
                landlord: property[0].user_name,
                landEmail: property[0].email,
                landPhone: property[0].phone,
                prefcontact: property[0].prefcontact

            })
        }
    }


    render() {
        return (
            <div className='tdash_outer-container'>
                <NavBar />
                <div className='tdash_container'>

                    <div className='tdash_mid-container'>

                        <div className='tdash_img-rent-container'>
                            <img className='tdash_img' src={this.state.imageurl} /> <br />

                            <div className='tdash_payrent'>
                                <div className='tdash_title'><h1>Monthly Rent</h1>
                                    <div className='tdash_data'>{this.state.monthlyrent}</div>
                                </div>

                                <StripeCheckout
                                    token={this.onToken}
                                    stripeKey={'pk_test_kyHw31cabHGKQCttwntsQTzt'}
                                    amount={this.state.monthlyrent * 100}
                                />
                            </div>
                        </div>


                        <div className='tdash_propertyinfo-container'>
                            <div className='tdash_column'>
                                <div className='tdash_title'><h1>Address</h1>
                                    <div className='tdash_data'>{this.state.address}</div>
                                </div>
                                <div className='tdash_title'><h1>Lease Expiration</h1>
                                    <div className='tdash_data'>{this.state.lease}</div>
                                </div>
                                <div className='tdash_title'><h1>Landlord</h1>
                                    <div className='tdash_data'>{this.state.landlord}</div>
                                </div>
                                <div className='tdash_title'><h1>Email</h1>
                                    <div className='tdash_data'>{this.state.landEmail}</div>
                                </div>
                                <div className='tdash_title'><h1>Phone Number</h1>
                                    <div className='tdash_data'>{this.state.landPhone}</div>
                                </div>
                                <div className='tdash_title'><h1>Preferred Contact Method</h1>
                                    <div className='tdash_data'>{this.state.prefcontact}</div>
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
        propsUsers: state.propsUsers
    }
}

export default connect(mapStateToProps, { getUsersProps })(TenantDash)
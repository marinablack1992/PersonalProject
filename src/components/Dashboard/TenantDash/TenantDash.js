import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import stripe from './../../../stripeKey';
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
                    <div className='tdash_nav'>
                        <div className='tdash_links-container'>
                            <Link className='tdash_link' to='/requests'>Manage Requests</Link>
                            <Link className='tdash_link' to='/addreq'>Add Request</Link>
                        </div>
                        <div className='tdash_payrent'>
                            <StripeCheckout
                                token={this.onToken}
                                stripeKey={stripe.pub_key}
                                amount={this.state.monthlyrent * 100}
                            />
                        </div>
                    </div>
                    <div className='tdash_mid-container'>
                        <div className='tdash_img-prop'>
                            <img className='tdash_img' src={this.state.imageurl} /> <br />

                            <div className='tdash_propertyinfo-container'>
                                <div className='tdash_propertyinfo'>
                                    <div className='tdash_title'>Address: {this.state.address} <br /></div>
                                    <div className='tdash_title'>Monthly Rent: {this.state.monthlyrent} <br /></div>
                                    <div className='tdash_title'>Lease Expiration: {this.state.lease} <br /></div>
                                </div>


                                <div className='tdash_landlordinfo'>
                                    <div className='tdash_title'>Landlord: {this.state.landlord} <br /></div>
                                    <div className='tdash_title'>Email: {this.state.landEmail} <br /></div>
                                    <div className='tdash_title'>Phone Number: {this.state.landPhone} <br /></div>
                                    <div className='tdash_title'>Preferred Method Of Contact: {this.state.prefcontact} <br /></div>
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
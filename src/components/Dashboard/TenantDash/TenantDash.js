import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import stripe from './../../../stripeKey';
import NavBar from './../../NavBar/NavBar.js';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUsersProps } from './../../../ducks/reducer.js';
import Property from './../../Property/Property.js';

class TenantDash extends Component {




    // if the user's email exists on the properties table, pull that property object based off of it's id and render it.

    render() {
        console.log('getUsersProps', this.props.propsUsers)
        return (
            <div className='tdash_outer-container'>
                <NavBar />
                <div className='tdash_payrent'> Pay Yo Rent
                <StripeCheckout
                    token={this.onToken}
                    stripeKey={stripe.pub_key}
                    amount={1000}
                />
                </div>
                <button onClick={this.props.getUsersProps()}>yo</button>
                <div className='tdash_submit'>
                    
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

export default connect(mapStateToProps, {getUsersProps})(TenantDash)
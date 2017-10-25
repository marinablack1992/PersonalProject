import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import stripe from './../../../stripeKey';
import NavBar from './../../NavBar/NavBar.js';
import axios from 'axios';


class TenantDash extends Component {




    render() {
        return (
            <div>
                <NavBar />
                <StripeCheckout
                    token={this.onToken}
                    stripeKey={stripe.pub_key}
                    amount={1000}
                />

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default TenantDash
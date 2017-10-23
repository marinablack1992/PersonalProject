import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { addTenant, getUserProperties  } from './../../../ducks/reducer.js'

class AddTenant extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            leaseExp: ''
        }

        this.handleChange = this.handleChange.bind(this)
        
    }

    componentDidMount() {
        getUserProperties()
    }


    handleChange(prop, e) {
        this.setState({
            [prop]: e.target.value,
        })
    }

    render() {
        console.log('userProps:', this.props.userProps);
        return (
            <div className='container'>
                <div>Tenant's Email Address</div>
                <input type='text'
                 value={this.state.email}
                 onChange={(e) => {this.handleChange('email', e)}} />

                <div>Lease Expiration</div>
                <input type='text'
                 value={this.state.leaseExp}
                 onChange={(e) => {this.handleChange('leaseExp', e)}}/>

                <Link to='/check'><button onClick={() => this.props.addTenant(this.props.userProps[0].id, this.state.email, this.state.leaseExp)}>+</button></Link>
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

export default connect(mapStateToProps, { addTenant, getUserProperties })(AddTenant)
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { addTenant, getUserProperties } from './../../../ducks/reducer.js'
import NavBar from './../../NavBar/NavBar.js';
import './AddTenant.css';

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
            <div className='addten_outer-container'>
                <NavBar />
                <div className='addten_container'>
                    <div className='addten_mid-container'>
                        <h3>Add Tenant</h3>
                        <Link className='addten_link' to='/check'><button className='addten_btn'>x</button></Link>
                        <div className='addten_title'>Tenant's Email Address <br />
                            <input className='addten_input' type='text'
                                value={this.state.email}
                                onChange={(e) => { this.handleChange('email', e) }} />
                        </div>

                        <div className='addten_title'>Lease Expiration <br />
                            <input className='addten_input' type='text'
                                value={this.state.leaseExp}
                                onChange={(e) => { this.handleChange('leaseExp', e) }} />
                        </div>

                        <Link className='addten_link' to='/check'><button className='addten_btn' onClick={() => this.props.addTenant(this.props.userProps[0].id, this.state.email, this.state.leaseExp)}>+</button></Link>
                    </div>
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

export default connect(mapStateToProps, { addTenant, getUserProperties })(AddTenant)
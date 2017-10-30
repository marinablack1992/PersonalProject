import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProperties, updateProperty } from './../../../ducks/reducer.js'
import { Link } from 'react-router-dom'
import NavBar from './../../NavBar/NavBar.js';
import './EditProperty.css';

class EditProperty extends Component {
    constructor() {
        super();

        this.state = {
            imageurl: '',
            address: '',
            monthly_rent: 0,
            tenant_email: '',
            lease_exp: ''
        }

    }

    componentDidMount() {
        this.props.getUserProperties()
    }

    componentWillReceiveProps(newProps) {
        var property = newProps.userProps.filter((e, i, array) => {
            if (this.props.match.params.id == e.id) {
                return e
            }
        })


        this.setState({
            imageurl: property[0].imageurl,
            address: property[0].address,
            monthly_rent: property[0].monthly_rent,
            tenant_email: property[0].tenant_email,
            lease_exp: property[0].lease_exp
        })
    }

    handleChange(prop, e) {
        this.setState({ [prop]: e.target.value })
    }

    editProperty() {
        const { imageurl, address, monthly_rent, tenant_email, lease_exp } = this.state;
        var updatedProp = {
            imageurl,
            address,
            monthly_rent,
            tenant_email,
            lease_exp
        }
        this.props.updateProperty(this.props.match.params.id, updatedProp)
    }

    render() {
        console.log(this.props.userProps)
        return (
            <div className='editprop_outer-container'>
                <NavBar />
                <div className='editprop_container'>
                    <div className='editprop_mid-container'>
                        <h4>Edit Property</h4>
                        <Link className='editprop_link' to='/ldashboard'><button className='editprop_btn'>x</button></Link>
                        <div className='editprop_title'>Image  <br />
                            <input className='editprop_input' type='text' onChange={(e) => this.handleChange('imageurl', e)}></input>
                        </div>
                        <div className='editprop_title'>Address  <br />
                            <input className='editprop_input' type='text' onChange={(e) => this.handleChange('address', e)}></input>
                        </div>
                        <div className='editprop_title'>Rent  <br />
                            <input className='editprop_input' type='text' onChange={(e) => this.handleChange('monthly_rent', e)}></input>
                        </div>
                        <div className='editprop_title'>Tenant Email <br />
                            <input className='editprop_input' type='text' onChange={(e) => this.handleChange('tenant_email', e)}></input>
                        </div>
                        <div className='editprop_title'>Lease Expiration<br />
                            <input className='editprop_input' type='text' onChange={(e) => this.handleChange('lease_exp', e)}></input>
                        </div>
                        <Link className='editprop_link' to='/ldashboard'><button className='editprop_btn' onClick={() => this.editProperty()}>+</button></Link>
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

export default connect(mapStateToProps, { getUserProperties, updateProperty })(EditProperty)
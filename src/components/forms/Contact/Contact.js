import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from './../../NavBar/NavBar.js';
import { connect } from 'react-redux';
import { updateContact } from './../../../ducks/reducer.js'
import './Contact.css'

class Contact extends Component {
    constructor() {
        super()

        this.state = {
            phone: '',
            preferred: ''
        }

        this.handleChange = this.handleChange.bind(this)

    }

    componentWillReceiveProps(newProps) {
        console.log(!newProps.user)
        if (!newProps.user) {
            this.props.history.push('/')
        }
    }

    handleChange(prop, e) {
        this.setState({
            [prop]: e.target.value
        })

    }

    render() {
        const user = this.props.user

        return (
            <div className='con_outer-container'>
                <NavBar />
                <div className='con_container'>
                    <div className='con_mid-container'>
                        <h5>Contact Information</h5>
                        <Link className='con_link' to='/check'><button className='con_btn'>x</button></Link>
                        <div className='con_title'>
                            Phone Number <br />
                            <input className='con_input' type='text' placeholder='888-888-8888' value={this.state.phone} onChange={(e) => { this.handleChange('phone', e) }} />
                        </div>

                        <div className='con_title'>
                            Preferred Contact Method <br />
                            <select className='con_drop-menu' value={this.state.preferred} onChange={(e) => { this.handleChange('preferred', e) }}>
                                <option value='Texts'>Text</option>
                                <option value='Emails'>Email</option>
                                <option value='Calls'>Call</option>
                                <option value='None'>None</option>
                            </select></div>

                        <Link className='con_link' to='/check'>
                            <button className='con_btn' onClick={() => { this.props.updateContact(this.state.phone, this.state.preferred), alert(`Your information has been updated!`) }}>+</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, { updateContact })(Contact)
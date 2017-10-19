import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { updateContact } from './../../../ducks/reducer.js'

class Contact extends Component {
    constructor() {
        super()

        this.state = {
            phone: '',
            preferred: ''
        }

        this.handleChange = this.handleChange.bind(this)

    }

    componentWillReceiveProps(newProps){
        console.log(!newProps.user)
        if (!newProps.user){
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
            <div className='container'>
                <Link to='/dashboard'><button>x</button></Link>
                <div>
                    Phone Number
                <input type='text' placeholder='888-888-8888' value={this.state.phone} onChange={(e) => { this.handleChange('phone', e) }} />
                </div>

                <div>
                    Preferred Contact Method
                    <select value={this.state.preferred} onChange={(e) => { this.handleChange('preferred', e) }}>
                        <option value='Texts Preferred'>Text</option>
                        <option value='Emails Preferred'>Email</option>
                        <option value='Calls Preferred'>Call</option>
                        <option value='No Preference'>None</option>
                    </select></div>

                <Link to='/check'>
                <button onClick={() => {this.props.updateContact(user.id, this.state.phone, this.state.preferred), alert(`Your information has been updated!`)}}>+</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, {updateContact})(Contact)
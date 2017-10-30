import React, { Component } from 'react';
import NavBar from './../../NavBar/NavBar.js';
import { Link } from 'react-router-dom';
import { addRequest, getUsersProps } from './../../../ducks/reducer.js'
import {connect} from 'react-redux';


class RequestForm extends Component {
    constructor() {
        super();

        this.state = {
            land_email: '',
            req_img: '',
            description: '',
            priority: '1',
            property: 0
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
                land_email: property[0].email,
                property: property[0].propertyid
            })
        }
    }

    newRequest(req_img, description, priority, land_email) {
        const body = {
            req_img: this.state.req_img,
            description: this.state.description,
            priority: this.state.priority,
            land_email: this.state.land_email
        }
        this.props.addRequest(this.state.property, body)
    }

    handleChange(prop, e) {
        this.setState({ [prop]: e.target.value })
    }

    render() {    
        return (
            <div className='container'>
                <NavBar />

                <div className='form'>
                    <Link to='/tdashboard'><button>x</button></Link>
                    <h1>Request</h1>
                    <div className='renderImg'></div>
                    <div>Image (Optional)
                        <input value={this.state.req_img} onChange={(e) => { this.handleChange('req_img', e) }}></input>
                    </div>
                    <div>Description
                        <input value={this.state.description} onChange={(e) => { this.handleChange('description', e) }}></input>
                    </div>
                    <div>Priority
                        <select value={this.state.priority} onChange={(e) => { this.handleChange('priority', e) }}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                </div>
                <Link to='/requests'><button onClick={() => this.newRequest()}>+</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        propsUsers: state.propsUsers,
        requests: state.requests
    }
}

export default connect(mapStateToProps, { addRequest, getUsersProps })(RequestForm)
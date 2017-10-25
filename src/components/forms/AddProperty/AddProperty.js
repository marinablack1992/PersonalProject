import React, { Component } from 'react';
import NavBar from './../../NavBar/NavBar.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProperty } from './../../../ducks/reducer.js';
import './AddProperty.css';

class AddProperty extends Component {
    constructor() {
        super();

        this.state = {
            image: '',
            address: '',
            rent: 0
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
            [prop]: e.target.value,
        })
    }

    render() {
        return (
            <div className='addprop_outer-container'>
                <NavBar />
                <div className='addprop_container'>
                    <div className='addprop_mid-container'>
                        <Link className='addprop_btnlink' to='/ldashboard'><button className='addprop_btn'>x</button></Link>
                        <img className='renderImgURL' src={this.state.image} />
                        <div className='addprop_title'>Image URL<br />
                    <input className='addprop_input' type='text' value={this.state.image}
                                onChange={(e) => { this.handleChange('image', e) }} />
                        </div>
                        <div className='addprop_title'>Address<br />
                    <input className='addprop_input' type='text' value={this.state.address}
                                onChange={(e) => { this.handleChange('address', e) }} />
                        </div>
                        <div className='addprop_title'>Monthly Rent<br />
                    <input className='addprop_input' type='text' value={this.state.rent}
                                onChange={(e) => { this.handleChange('rent', e) }} />
                        </div>

                        <Link className='addprop_btnlink' to='/ldashboard'><button className='addprop_btn' onClick={(e) => { this.props.addProperty(this.state.image, this.state.address, this.state.rent), alert('Property Added!') }} >+</button></Link>
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

export default connect(mapStateToProps, { addProperty })(AddProperty)
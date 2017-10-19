import React, { Component } from 'react';
import NavBar from './../../NavBar/NavBar.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProperty } from './../../../ducks/reducer.js'

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

    componentWillReceiveProps(newProps){
        console.log(!newProps.user)
        if (!newProps.user){
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
            <div className='container'>
                <NavBar />
                <Link to='/ldashboard'><button>x</button></Link>
                <div className='renderImgURL'></div>
                <div>Image URL
                    <input type='text' value={this.state.image}
                        onChange={(e) => {this.handleChange('image', e)}}/>
                </div>
                <div>Address
                    <input type='text' value={this.state.address}
                    onChange={(e) => {this.handleChange('address', e)}}/>
                </div>
                <div>Monthly Rent
                    <input type='text' value={this.state.rent}
                    onChange={(e) => {this.handleChange('rent', e)}}/>
                </div>

                <Link to='/ldashboard'><button onClick={(e) => { this.props.addProperty(this.state.image, this.state.address, this.state.rent), alert('Property Added!') }} >+</button></Link>
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
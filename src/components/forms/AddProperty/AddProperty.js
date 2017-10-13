import React, { Component } from 'react';
import NavBar from './../../NavBar/NavBar.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProperty, getUserInfo } from './../../../ducks/reducer.js'

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

    componentWillRecieveProps(nextProps){
        if (!this.props.user){
            this.props.history.push('/')
        }
    }

    // I need to make sure that the user who fills out this form gets a foreign key added to the database.
    // Do I need to mount all the user info and take in an id as another parameter?
    // How do I make sure that the foreign key in the properties table will be the same as the users ID?
    // Do I need multiple handleChange methods for my inputs?
    componentDidMount(){
        this.props.getUserInfo();
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
                <Link to='/l/dashboard'><button>x</button></Link>
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

                <Link to='/l/dashboard'><button onClick={(e) => { this.props.addProperty(this.state.image, this.state.address, this.state.rent), alert('Property Added!') }} >+</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, { getUserInfo, addProperty })(AddProperty)
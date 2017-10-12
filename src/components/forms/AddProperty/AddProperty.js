import React, { Component } from 'react';
import NavBar from './../../NavBar/NavBar.js';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addProperty } from './../../../ducks/reducer.js'

class AddProperty extends Component{

addProperty(image, address, rent){
    this.props.addProperty()
}

    render(){
        return(
            <div className='container'>
                <NavBar />
                <Link to='/dashboard'><button>x</button></Link>
                <div className='renderImgURL'></div>
                <div>Image URL<input></input></div>
                <div>Address<input></input></div>
                <div>Monthly Rent<input></input></div>

                <button onClick = {(e) => { addProperty(e.target.value)}} >+</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        state
    }
}

export default connect(mapStateToProps, {addProperty})(AddProperty)
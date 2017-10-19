import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditProperty extends Component {
    constructor() {
        super();

        this.state = {
            image: '',
            address: '',
            rent: 0
        }
    }

    componentDidMount() {
        this.props.getUserPropsTens()

        this.setState({
            image: this.props.propsTens.imageurl,
            address: this.props.propsTens.address,
            rent: this.props.propsTens.rent
        })
    }

    handleChange(prop, e){
        this.setState({[prop]: e.target.value})
    }

    render() {
        return (
            <div>
                Image: {this.state.image}
                <input type='text' value={this.state.image}></input>
                
                Address: {this.state.address}
                <input type='text' value={this.state.address}></input>
                
                Rent: {this.state.rent}
                <input type='text' value={this.state.rent}></input>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(EditProperty)
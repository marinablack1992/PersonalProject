import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProperties } from './../../../ducks/reducer.js'

class EditProperty extends Component {
    constructor() {
        super();

        this.state = {
            image: '',
            address: '',
            rent: 0,
            tenant: '',
            leaseExp: ''
        }
    }

    componentDidMount() {
        this.props.getUserProperties()
        
        this.setState({
            image: this.props.userProps.imageurl,
            address: this.props.userProps.address,
            rent: this.props.userProps.rent,
            tenant: this.props.userProps.tenant_email,
            leaseExp: this.props.userProps.leaseExp
        })
    }

    handleChange(prop, e){
        this.setState({[prop]: e.target.value})
    }


    render() {
        return (
            <div>
                <button>x</button>
                Image: {this.state.image}
                <input type='text' value={this.state.image}></input>
                
                Address: {this.state.address}
                <input type='text' value={this.state.address}></input>
                
                Rent: {this.state.rent}
                <input type='text' value={this.state.rent}></input>

                Tenant Email: {this.state.tenant}
                <input type='text' value={this.state.tenant}></input>

                Lease Expiration: {this.state.leaseExp}
                <input type='text' value={this.state.leaseExp}></input>

                <button>+</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
    userProps: state.userProps,
    user: state.user
    }
}

export default connect(mapStateToProps, { getUserProperties })(EditProperty)
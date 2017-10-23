import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProperties, updateProperty } from './../../../ducks/reducer.js'

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

    componentWillReceiveProps(newProps){
        var property = newProps.userProps.filter((e, i, array) => {
            if (this.props.match.params.id == e.id){
                return e
            }
        })

        console.log(property)

        this.setState({
            imageurl: property[0].imageurl,
            address: property[0].address,
            monthly_rent: property[0].monthly_rent,
            tenant_email: property[0].tenant_email,
            lease_exp: property[0].lease_exp
        })
    }

    handleChange(prop, e){
        this.setState({[prop]: e.target.value})
    }

    editProperty(){
        const { imageurl, address, monthly_rent, tenant_email, lease_exp} = this.state;
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
        return (
            <div>
                <button>x</button>
                Image: {this.state.imageurl}
                <input type='text' onChange = {(e) => this.handleChange('imageurl', e)}></input>
                
                Address: {this.state.address}
                <input type='text' onChange = {(e) => this.handleChange('address', e)}></input>
                
                Rent: {this.state.monthly_rent}
                <input type='text' onChange = {(e) => this.handleChange('monthly_rent', e)}></input>

                Tenant Email: {this.state.tenant_email}
                <input type='text' onChange = {(e) => this.handleChange('tenant_email', e)}></input>

                Lease Expiration: {this.state.lease_exp}
                <input type='text' onChange = {(e) => this.handleChange('lease_exp', e)}></input>

                <button onClick={() => this.editProperty()}>+</button>
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

export default connect(mapStateToProps, { getUserProperties, updateProperty })(EditProperty)
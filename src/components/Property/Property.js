import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUserProperties, getUserPropsTens } from './../../ducks/reducer.js';

class Property extends Component {

    componentDidMount() {
        this.props.getUserProperties(this.props.user.id)
        this.props.getUserPropsTens();
    }

    render() {
        console.log('propsTens', this.props.propsTens)
        return (
            <div className='container'>
                <div className='propertyoptions'>
                    <Link to='/addtenant'><div>Add Tenant</div></Link>
                    <div>Edit Tenant</div>
                    <div>Delete Tenant</div>
                    <div>Edit Property</div>
                    <div>Delete Property</div>

                    <div>
                        Image:{this.props.userProps.imageurl}
                        Address:{this.props.userProps.address}
                        Rent:{this.props.userProps.monthly_rent}
                        Current Tenant:{this.props.propsTens.ten_email}
                        Lease Expiration:{this.props.propsTens.lease_exp}
                    </div>

                    <div>

                    </div>
                </div>

                <div>
                    <Link to='requests'><button>Manage Requests</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userProps: state.userProps,
        user: state.user,
        propsTens: state.propsTens
        }
}

export default connect(mapStateToProps, { getUserProperties, getUserPropsTens })(Property)
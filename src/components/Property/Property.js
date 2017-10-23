import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUserProperties } from './../../ducks/reducer.js';

class Property extends Component {

    // componentDidMount() {
    //     this.props.getUserProperties()
    // }

    render() {
        return (
            <div className='container'>
                <div className='propertyoptions'>
                    <Link to='/addtenant'><div>Add Tenant</div></Link>
                    <Link to={`/editprop/${this.props.property.id}`}><div>Edit</div></Link>
                    <div>Delete</div>

                    <div>
                        Image:{this.props.property.imageurl}
                        Address:{this.props.property.address}
                        Rent:{this.props.property.monthly_rent}
                        Tenant: {this.props.property.tenant_email}
                        Lease Expiration: {this.props.property.lease_exp}
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
        }
}

export default Property
// export default connect(mapStateToProps, { getUserProperties })(Property)
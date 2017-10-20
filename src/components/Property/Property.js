import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUserProperties, getUserPropsTens } from './../../ducks/reducer.js';

class Property extends Component {

    componentDidMount() {
        this.props.getUserProperties(this.props.user.id)
    }

    render() {
        return (
            <div className='container'>
                <div className='propertyoptions'>
                    <Link to='/addtenant'><div>Add Tenant</div></Link>
                    <div>Edit Tenant</div>
                    <div>Delete Tenant</div>
                    <div>Edit Property</div>
                    <div>Delete Property</div>

                    <div>
                        Image:{this.props.property.imageurl}
                        Address:{this.props.property.address}
                        Rent:{this.props.property.monthly_rent}
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

export default Property

// export default connect(mapStateToProps, { getUserProperties, getUserPropsTens })(Property)
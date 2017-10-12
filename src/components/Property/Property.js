import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Property extends Component {
    render(){
        return (
            <div className='container'>
                <div className='propertyoptions'>
                    <div>Add Tenant</div>
                    <div>Edit Tenant</div>
                    <div>Delete Tenant</div>
                    <div>Edit Property</div>
                    <div>Delete Property</div>

                    <div>fucking property info</div>
                </div>

                <div>
                    <Link to='requests'><button>Manage Requests</button></Link>
                </div>
            </div>
        )
    }
}

export default Property
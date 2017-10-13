import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className='container'>
                <Link to='/ldashboard'><div>Profile</div></Link>
                <div>Logout</div>
                </div>
        )
    }
}

export default NavBar
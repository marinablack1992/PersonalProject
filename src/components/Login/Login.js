import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    render() {
        return (
            <div className='login_outer-container'>
                <div className='login_container'>
                    <div className='login_header-container'>
                        <h1>Property Management</h1>
                        <h2>Simplified</h2>
                    </div>

                    <div className='login_button-container'>
                        <a className='login_link' href={process.env.REACT_APP_LOGIN}>Login</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
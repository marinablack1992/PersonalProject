import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    render() {
        return (
            <div className='main'>
                <div className='header-container'>
                    <div className='header'>
                        Property Management
                </div>

                    <div className='simplified'>
                        simplified
                </div>
                </div>

                <div className='login-container'>

                    <div className='login'>
                        <a className='logintext' href={process.env.REACT_APP_LOGIN}>Login</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
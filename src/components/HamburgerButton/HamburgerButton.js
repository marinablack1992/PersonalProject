import React, { Component } from 'react';
import './HamburgerButton.css';

class HamburgerButton extends Component {
    render() {
        return (
            <div className='navbar_hamburger-icon'>
                <div className='hamburger-line'></div>
                <div className='hamburger-line'></div>
                <div className='hamburger-line'></div>
            </div>
        )
    }
}

export default HamburgerButton;
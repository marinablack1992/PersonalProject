import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.css'
import HamburgerButton from './../HamburgerButton/HamburgerButton.js'
import './../HamburgerButton/HamburgerButton.css'


class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            navbar: false
        }
    }

    toggleSideNav() {
        this.setState({ navbar: !this.state.navbar })
        console.log(this.state)
    }

    render() {
        const user = this.props.user;
        return (
            <div className='navbar_outer-container'>
                <div className='navbar_container'>

                    <div onClick={this.toggleSideNav.bind(this)}><HamburgerButton /></div>

                    <img className='nav_logo' src='http://www.iconsdb.com/icons/preview/white/home-xxl.png' />

                    <div className='navbar_user-container'>
                        <Link className='navbar_link' to='/check'><div className='username'><p>{user.id ? user.user_name : null}</p></div></Link>
                        <Link className='navbar_link' to='/check'><div className='userphoto'>{user ? <img className='avatar' src={user.img} /> : null}</div></Link>

                    </div>
                </div>

                <div className={this.state.navbar ? 'sidenav expanded' : 'sidenav'}>
                    {this.props.user.status == 'Landlord' ? <Link className='sidenav_link' to='/contact'>Edit Contact Information</Link> : null}
                    {this.props.user.status == 'Landlord' ? <Link className='sidenav_link' to='/addprop'>Add Property</Link> : null}
                    <Link className='sidenav_link' to='/requests'>Manage Requests</Link>

                    <div className='sidenav_link'>
                        {<a href={process.env.REACT_APP_LOGOUT}>Logout</a>}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(NavBar)
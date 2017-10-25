import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.css'


class NavBar extends Component {
    render() {
        const user = this.props.user;
        return (
            <div className='main-container'>
                <div className='links'>
                    <div className='user-photo-holder'>
                    <Link to='/check'><div className='userphoto'>{user ? <img className='avatar' src={user.img} /> : null}</div></Link>
                    <Link to='/check'><div className='username'><p>{user.id ? user.user_name : null}</p></div></Link>
                    </div>
                    <img className='nav_logo' src='http://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/256/yellow-home-icon.png'/>
                    <a href='http://localhost:3005/auth/logout'><button className='logout'>Logout</button></a>
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
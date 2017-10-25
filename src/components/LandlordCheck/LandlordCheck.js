import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo, setUser } from './../../ducks/reducer.js';
import { Link } from 'react-router-dom';
import './LandlordCheck.css';

class LandlordCheck extends Component {

    componentDidMount() {

        this.props.getUserInfo()

    }

    componentWillReceiveProps(newProps) {
        if (newProps.user.status === 'Landlord') {
            this.props.history.push('/ldashboard')
        } else if (newProps.user.status === 'Tenant') {
            this.props.history.push('/tdashboard')
        }
    }

    render() {
        const user = this.props.user

        return (
            <div className='check_container'>
                <div className='check_btns'>
                    <Link to='/ldashboard'><button className='check_landbtn' value={"Landlord"} onClick={(e) => this.props.setUser(user.id, e.target.value)}>Landlord</button></Link>
                    <br/><Link to='tdashboard'><button className='check_tenbtn' value={"Tenant"} onClick={(e) => this.props.setUser(user.id, e.target.value)}>Tenant</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        newUser: state.newUser
    }
}

let outActions = {
    getUserInfo: getUserInfo,
    setUser: setUser
}

export default connect(mapStateToProps, outActions)(LandlordCheck)


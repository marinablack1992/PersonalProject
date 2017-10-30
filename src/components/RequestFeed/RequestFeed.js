import React, { Component } from 'react';
import Request from './Request/Request.js'
import NavBar from './../NavBar/NavBar.js'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUsersPropsReqs } from './../../ducks/reducer.js'
import './RequestFeed.css';

class RequestFeed extends Component {

    componentDidMount() {
        this.props.getUsersPropsReqs();
    }

    render() {
        console.log(this.props.usersPropsReqs)
        return (
            <div className='reqfeed_outer-container'>
                <NavBar />
                <div className='reqfeed_container'>
                    <h1>Requests for Property</h1>
                    <div className='reqfeed_rendered-container'>
                        {this.props.usersPropsReqs.map((request, i) => <Request key={i} request={request} />)}
                    </div>
                    {this.props.user.status === 'Tenant' ? <Link to='/addreq' className='reqfeed_new-req'>New Request</Link> : null}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.usersPropsReqs)
    return {
        user: state.user,
        usersPropsReqs: state.usersPropsReqs
    }
}

export default connect(mapStateToProps, { getUsersPropsReqs })(RequestFeed)

//{this.props.userProps.map((property, i) => <Property key={i} property={property} />)}
import React, { Component } from 'react';

class TenantDash extends Component {


    componentWillReceiveProps(newProps) {
        console.log(!newProps.user)
        if (!newProps.user) {
            this.props.history.push('/')
        }
    }


    render() {
        return (
            <div></div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default TenantDash
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteRequest } from './../../../ducks/reducer.js'


class Request extends Component {
    render() {
        return (
            <div className='req_outer-container'>
                {this.props.user.status == 'Tenant' ? <button onClick={() => this.props.deleteRequest(this.props.request.requestid)}>Delete Request</button> : null}
                Property: <br /> {this.props.request.address}<br />
                Description: <br />{this.props.request.description}<br />
                Priority: <br />{this.props.request.priority}<br />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { deleteRequest })(Request)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteRequest } from './../../../ducks/reducer.js'
import './Request.css';


class Request extends Component {
    render() {
        console.log(this.props.request, this.props.request.requestid)
        return (
            <div className='req_outer-container'>
                {this.props.user.status == 'Tenant' ? <button className='req_delete' onClick={() => this.props.deleteRequest(this.props.request.requestid)}>x</button> : null}
                <div className='req_container'>

                    <div className='req_img-address'>
                        <div className='req_data-address'>{this.props.request.address}</div>
                        <img className='req_img' src={this.props.request.req_img} />
                    </div>

                    <div className='req_reqinfo'>
                        <div className='req_title'>Description</div>
                        <div className='req_data-description'>{this.props.request.description}</div>
                        <div className='req_priority'>
                            <div className='req_title'>Priority</div>
                            <div className='req_data-priority'>{this.props.request.priority}</div>
                        </div>
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

export default connect(mapStateToProps, { deleteRequest })(Request)
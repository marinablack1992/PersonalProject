import React, { Component } from 'react';
import './App.css';
import router from './router.js';
import {connect} from 'react-redux';
import {getUserInfo} from './ducks/reducer.js';
import {withRouter} from 'react-router'

class App extends Component {

  componentDidMount(){
    this.props.getUserInfo()
  }

  render() {
    console.log('app', this.props.user)
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
  }
}

export default withRouter(connect(mapStateToProps, {getUserInfo})(App));

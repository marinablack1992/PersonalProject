import React, { Component } from 'react';
import './App.css';
import router from './router.js';
import {connect} from 'react-redux';
import {getUserInfo} from './ducks/reducer.js';

class App extends Component {

  componentDidMount(){
    getUserInfo()
  }

  render() {
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

export default connect(mapStateToProps, {getUserInfo})(App);

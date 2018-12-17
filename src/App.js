/*jshint esversion: 6 */

import React, { Component } from 'react';
import Form from './components/Form';

import {connect} from "react-redux";


function mapStateToProps(state) {
  console.log("App:", state);
  const { dataFromChild } = state.setDataFromChild;
  return { data : dataFromChild};
}

class App extends Component {
  render() {
    return (
      <> 
        <Form />
        <h1> parent: {this.props.data}</h1>
      </>
    );
  }
}

export default connect(mapStateToProps)(App);

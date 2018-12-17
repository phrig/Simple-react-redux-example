/*jshint esversion: 6 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {sendDataToParent} from '../redux/actions';

const mapDispatchToProps = { sendDataToParent };

class Form extends Component {
  constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('A name was submitted: ' + this.state.value);
    this.props.sendDataToParent(this.state.value);
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>

      <h2>child: {this.state.value}</h2>
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(Form);

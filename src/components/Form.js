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
  }


  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange} />
        <input
          type="submit"
          value="Update parent"
          onClick={() => this.props.sendDataToParent(this.state.value)} />
        <h2>child: {this.state.value}</h2>
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(Form);

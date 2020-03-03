import React, { Component } from "react";

export default class Alert extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="alert alert-primary" role="alert">
        {this.props.MensajeAlert}
      </div>
    );
  }
}

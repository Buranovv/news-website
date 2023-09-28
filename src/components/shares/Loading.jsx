import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

import "./loader.css";

export class Loading extends Component {
  render() {
    return <Spinner className="loader" animation="border" variant="primary" />;
  }
}

export default Loading;

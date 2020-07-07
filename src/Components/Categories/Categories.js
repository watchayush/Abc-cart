import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default class Categories extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>xyz{console.log(this.props.category)}</div>;
  }
}

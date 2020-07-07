import React, { Component } from "react";
import "../SideNavPage/SideNavPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
export default class SideNavPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      container: {}
    };
  }
  render() {
    return <Card className="side_navigation"></Card>;
  }
}

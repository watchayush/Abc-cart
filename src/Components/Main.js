import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
// import SideNavPage from "./Components/SideNavPage/SideNavPage";
import { FaAlignJustify } from "react-icons/fa";
import "../App.css";
import Slider from "./Slider/Slider";
import Trending from "./Trendin/Trending";
import CategoriesMenu from "./CategoriesMenu/CategoriesMenu";

export default class Main extends Component {
  render() {
    return (
      <div>
        <main style={{ height: "100%", position: "relative", top: "57px" }}>
          <Row style={{ margin: "2%" }}>
            <Col md={3} sm={3} xs={3}>
              <CategoriesMenu />
            </Col>
            <Col md={9} sm={9} xs={9}>
              <Row>
                <Col md={9} sm={9} xs={9}>
                  <Slider style={{ alignItems: "center" }} />
                </Col>
                <Col md={3} sm={3} xs={3}>
                  <div className="card" fluid>
                    <img
                      className="d-block w-100"
                      src={process.env.PUBLIC_URL + "/pics/shaadi.jpg"}
                      alt="First slide"
                      fluid
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Trending />
              </Row>
            </Col>
          </Row>
        </main>
      </div>
    );
  }
}

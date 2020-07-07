import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card } from "react-bootstrap";
import "../Slider/Slider.css";
import Emoji from "react-emoji-render";
export default class Slider extends Component {
  render() {
    return (
      // <Card>
      <div className="card">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={300}
              width={800}
              src={process.env.PUBLIC_URL + "/pics/wat.jpg"}
              alt="First slide"
              fluid
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={300}
              width={800}
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/pics/sale.jpg"}
              alt="Third slide"
              fluid
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="slider_desc">
          <Emoji text="The big sale is on. Go grab the offer:)!" />
        </div>
      </div>
      // </Card>
    );
  }
}

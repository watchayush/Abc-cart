import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import "../Trendin/Trending.css";

export default class Slider extends Component {
  render() {
    return (
      // <Card>
      <div className="trendin">
        <div className="trending_heading">Trending</div>

        <div className="card">
          <div className="trending_container">
            <Carousel onDurationChange="false">
              <Carousel.Item>
                <Row>
                  <Col md={3}>
                    <div className="card trending_product">
                      <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/pics/ms.jpg"}
                        alt="First slide"
                      />
                      <div className="trending_product_tag">
                        <span>
                          <FaRupeeSign />
                        </span>
                        <strike>450</strike>
                        <span> 400</span>
                        <div className="trending_product_name">
                          COVID-19 Mask
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="card trending_product">
                      <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/pics/handWash.jpg"}
                        alt="First slide"
                      />
                      <div className="trending_product_tag">
                        <span>
                          <FaRupeeSign />
                        </span>
                        <strike>200</strike>
                        <span> 170</span>
                        <div className="trending_product_name">
                          Dettol Handwash
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="card trending_product">
                      <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/pics/sanatiser.jpg"}
                        alt="First slide"
                      />
                      <div className="trending_product_tag">
                        <span>
                          <FaRupeeSign />
                        </span>
                        <strike>220</strike>
                        <span> 180</span>
                        <div className="trending_product_name">
                          Dettol Hand-Sanatiser
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="card trending_product">
                      <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/pics/face.jpg"}
                        alt="First slide"
                      />
                      <div className="trending_product_tag">
                        <span>
                          <FaRupeeSign />
                        </span>
                        <strike>150</strike>
                        <span> 140</span>
                        <div className="trending_product_name">
                          Wow Facewash
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>

              <Carousel.Item>
                <Row>
                  <Col md={3}>
                    <div className="card trending_product">
                      <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/pics/surf.jpg"}
                        alt="First slide"
                      />
                      <div className="trending_product_tag">
                        <span>
                          <FaRupeeSign />
                        </span>
                        <strike>60</strike>
                        <span> 55</span>
                        <div className="trending_product_name">Surf exel</div>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="card trending_product">
                      <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/pics/ms.jpg"}
                        alt="First slide"
                      />
                      <div className="trending_product_tag">
                        <span>
                          <FaRupeeSign />
                        </span>
                        <strike>450</strike>
                        <span> 400</span>
                        <div className="trending_product_name">
                          COVID-19 Mask
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="card trending_product">
                      <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/pics/handWash.jpg"}
                        alt="First slide"
                      />
                      <div className="trending_product_tag">
                        <span>
                          <FaRupeeSign />
                        </span>
                        <strike>250</strike>
                        <span> 220</span>
                        <div className="trending_product_name">
                          Dettol Handwash
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="card trending_product">
                      <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "/pics/sanatiser.jpg"}
                        alt="First slide"
                      />
                      <div className="trending_product_tag">
                        <span>
                          <FaRupeeSign />
                        </span>
                        <strike>220</strike>
                        <span> 200</span>
                        <div className="trending_product_name">
                          Dettol Hand-Sanetiser
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Categories from "../Categories/Categories";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CategoriesMenu/CategoriesMenu.css";
import { FaAngleRight } from "react-icons/fa";
export default class CategoriesMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategory: null,
    };
  }
  showHide = (id) => {
    this.setState(() => {
      this.state.subCategory = id;
      console.log(this.state.subCategory);
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="categories_menu">
            {this.state.subCategory ? (
              <Categories category={this.state.subCategory} />
            ) : (
              <div></div>
            )}
            <div className="categories_heading">Top Categories</div>
            <ul className="top">
              <li>
                <div
                  className="cat"
                  onMouseEnter={this.showHide.bind(this, "offers")}
                  onMouseLeave={this.showHide.bind(this, null)}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/pics/offer2.jpg"}
                    style={{
                      borderRadius: "50%",
                      height: "25px",
                      width: "35px",
                    }}
                    fluid
                  />
                  <a>Offers</a>
                  <FaAngleRight
                    style={{ float: "right", color: "gray", padding: "1%" }}
                  />
                </div>
              </li>
              <li>
                <div
                  className="cat"
                  onMouseEnter={this.showHide.bind(this, "mobile")}
                  onMouseLeave={this.showHide.bind(this, null)}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/pics/m&t.jpg"}
                    style={{
                      borderRadius: "50%",
                      height: "25px",
                      width: "35px",
                    }}
                    fluid
                  />
                  <a>Mobiles & Tablets</a>
                  <FaAngleRight
                    style={{ float: "right", color: "gray", padding: "1%" }}
                  />
                </div>
              </li>
              <li>
                <div
                  className="cat"
                  onMouseEnter={this.showHide.bind(this, "electronics")}
                  onMouseLeave={this.showHide.bind(this, null)}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/pics/gd.jpg"}
                    style={{
                      borderRadius: "50%",
                      height: "25px",
                      width: "35px",
                    }}
                    fluid
                  />
                  <a>Electronics</a>
                  <FaAngleRight
                    style={{ float: "right", color: "gray", padding: "1%" }}
                  />
                </div>
              </li>
              <li>
                <div
                  className="cat"
                  onMouseEnter={this.showHide.bind(this, "tv")}
                  onMouseLeave={this.showHide.bind(this, null)}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/pics/tv.jpg"}
                    style={{
                      borderRadius: "50%",
                      height: "25px",
                      width: "35px",
                    }}
                    fluid
                  />
                  <a>TV & Appliances</a>
                  <FaAngleRight
                    style={{ float: "right", color: "gray", padding: "1%" }}
                  />
                </div>
              </li>
              <li>
                <div
                  className="cat"
                  onMouseEnter={this.showHide.bind(this, "footwears")}
                  onMouseLeave={this.showHide.bind(this, null)}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/pics/footw.jpg"}
                    style={{
                      borderRadius: "50%",
                      height: "25px",
                      width: "35px",
                    }}
                    fluid
                  />
                  <a>Footwears</a>
                  <FaAngleRight
                    style={{ float: "right", color: "gray", padding: "1%" }}
                  />
                </div>
              </li>
              <li>
                <div
                  className="cat"
                  onMouseEnter={this.showHide.bind(this, "cloathings")}
                  onMouseLeave={this.showHide.bind(this, null)}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/pics/cloath.jpg"}
                    style={{
                      borderRadius: "50%",
                      height: "25px",
                      width: "35px",
                    }}
                    fluid
                  />
                  <a>Cloathings</a>
                  <FaAngleRight
                    style={{ float: "right", color: "gray", padding: "1%" }}
                  />
                </div>
              </li>
              <li>
                <div
                  className="cat"
                  onMouseEnter={this.showHide.bind(this, "furniture")}
                  onMouseLeave={this.showHide.bind(this, null)}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/pics/furniture.jpg"}
                    style={{
                      borderRadius: "50%",
                      height: "27px",
                      width: "35px",
                    }}
                    fluid
                  />
                  <a>Home & Furniture</a>
                  <FaAngleRight
                    style={{ float: "right", color: "gray", padding: "1%" }}
                  />
                </div>
              </li>
              <li>
                <div
                  className="cat"
                  onMouseEnter={this.showHide.bind(this, "sports")}
                  onMouseLeave={this.showHide.bind(this, null)}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/pics/cr.jpg"}
                    style={{
                      borderRadius: "50%",
                      height: "27px",
                      width: "35px",
                    }}
                    fluid
                  />
                  <a>Sports, Books & More</a>
                  <FaAngleRight
                    style={{ float: "right", color: "gray", padding: "1%" }}
                  />
                </div>
              </li>
            </ul>
            <div className="categories_heading">More Categories</div>
            <ul className="more">
              <li>
                <div
                  onMouseEnter={this.showHide.bind(this, "menFashion")}
                  onMouseLeave={this.showHide.bind(this, null)}
                >
                  <a>Men Fashion</a>
                  <FaAngleRight
                    style={{ float: "right", color: "gray", padding: "1%" }}
                  />
                </div>
              </li>
              <li>
                <div
                  onMouseEnter={this.showHide.bind(this, "womenFashion")}
                  onMouseLeave={this.showHide.bind(this, null)}
                >
                  <a>Women Fashion</a>
                  <FaAngleRight
                    style={{ float: "right", color: "gray", padding: "1%" }}
                  />
                </div>
              </li>
              <li>
                <div
                  onMouseEnter={this.showHide.bind(this, "kidsFashion")}
                  onMouseLeave={this.showHide.bind(this, null)}
                >
                  <a>Toy Kids' Fashion & More</a>
                  <FaAngleRight
                    style={{ float: "right", color: "gray", padding: "1%" }}
                  />
                </div>
              </li>

              <li>
                <div
                  onMouseEnter={this.showHide.bind(this, "beauty")}
                  onMouseLeave={this.showHide.bind(this, null)}
                >
                  <a>Beauty, Health & Daily Needs</a>
                  <FaAngleRight
                    style={{ float: "right", color: "gray", padding: "1%" }}
                  />
                </div>
              </li>
              <li>
                <div>
                  <a>Sports, Fittness & Outdoors</a>
                  <FaAngleRight
                    style={{ float: "right", color: "gray", padding: "1%" }}
                  />
                </div>
              </li>
              <li>
                <div>
                  <a>Home & Furniture</a>
                  <FaAngleRight
                    style={{ float: "right", color: "gray", padding: "1%" }}
                  />
                </div>
              </li>
              <li>
                <div>
                  <a>Books & More</a>
                  <FaAngleRight
                    style={{ float: "right", color: "gray", padding: "1%" }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

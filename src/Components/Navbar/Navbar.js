import React, { Component } from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/js/bootstrap.js";
import ReactSearchBox from "react-search-box";
import SideNavPage from "../SideNavPage/SideNavPage";
import "./Navbar.css";
import { Form, Col, FormLabel, Button } from "react-bootstrap";
import { FaSearch, FaAlignJustify, FaUserCircle } from "react-icons/fa";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import Search from "./Search";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <nav className="navigation_bar row">
            <div style={{ marginTop: "6px" }}>
              <FaAlignJustify
                onClick={this.showMenu}
                style={{
                  margin: "15px",
                  cursor: "pointer",
                  color: "white",
                  zIndex: "999",
                }}
              />
            </div>
            <div>
              <div className="navigation_logo">
                <a href="/">Abc-Cart</a>
              </div>
            </div>

            <div style={{ marginTop: "7px", width: "40%" }}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search ......"
                />
                <div className="input-group-append ">
                  <span className="input-group-text search_btn">
                    <i className="fa fa-search">Search</i>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="cart"
              style={{
                borderRight: "3px solid blue",
                borderLeft: "3px solid blue",
              }}
            >
              <div className="cart_inner">
                <NavLink
                  to="/signIn"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <span>Cart</span>
                  <span>
                    <i className="fa fa-shopping-cart"></i>
                  </span>
                </NavLink>
              </div>
            </div>

            <div className="signInUp" style={{ borderRight: "3px solid blue" }}>
              <div className="signIn_inner">
                {this.props.loggedIn_person == null ? (
                  <a
                    href="/signIn"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <span>SignIn</span>
                    <span>
                      <i className="fa fa-user-circle fa-lg"></i>
                    </span>
                  </a>
                ) : (
                  <p>
                    Hi!!! {"   " + this.props.loggedIn_person.name.firstname}
                  </p>
                )}
              </div>
            </div>
          </nav>
        </BrowserRouter>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    loggedIn_person: state.loggedIn_person,
  };
}

export default connect(mapStateToProps)(Navbar);

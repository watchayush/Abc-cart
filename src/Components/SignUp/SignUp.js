import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../SignUp/SignUp.css";
// import download from "process.env.PUBLIC_URL + '/pics/download.jpg'";
import { Card } from "react-bootstrap";
import axios from "axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geolocation: { lat: "", long: "" },
      address: { city: "" },
      street: "",
      number: "",
      zipcode: "",
      email: "",
      name: { firstname: "", lastname: "" },
      password: "",
      phone: "",
      username: "",

      // message: "",
    };
  }
  handleChange = (event) => {
    switch (event.target.name) {
      case "first":
        this.setState({ firstname: event.target.value });

        break;
      case "last":
        this.setState({ lastname: event.target.value });
        break;
      case "pwd":
        this.setState({ password: event.target.value });
        break;
      case "user":
        this.setState({ username: event.target.value });
        break;
      case "phone":
        this.setState({ phone: event.target.value });
        break;
      case "email":
        this.setState({ email: event.target.value });
        break;

      case "city":
        this.setState({ city: event.target.value });
        break;
      case "number":
        this.setState({ number: event.target.value });
        break;
      case "street":
        this.setState({ street: event.target.value });
        break;
      case "zipcode":
        this.setState({ zipcode: event.target.value });
        break;
      case "lat":
        this.setState({ lat: event.target.value });
        break;
      case "long":
        this.setState({ long: event.target.value });
        break;
      default:
        break;
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("insihadleSubmit for post");
    axios.post(`https://fakestoreapi.com/users`, this.state).then((res) => {
      console.log(res);
    });
  };
  render() {
    return (
      <div
        className="row"
        style={{
          height: "100%",
          position: "relative",
          top: "57px",
        }}
      >
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Card
            style={{
              width: "100%",
              // margin: "0 auto",
              height: "900px",
              marginTop: "35px",
              marginBottom: "20px",
              paddingLeft: "20px",
            }}
          >
            <form
              onSubmit={this.handleSubmit}
              style={{
                width: "30%",
                position: "relative",
                top: "57px",
              }}
              className="form-inline"
            >
              <div className="form-group align">
                <label for="first">First name :</label>
                <input
                  className="form-control"
                  id="first"
                  onChange={this.handleChange}
                  name="first"
                />
              </div>
              <div className="form-group align">
                <label for="last">Last name :</label>
                <input
                  className="form-control"
                  id="last"
                  onChange={this.handleChange}
                  name="last"
                />
              </div>
              <div className="form-group align">
                <label for="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  onChange={this.handleChange}
                  name="pwd"
                />
              </div>

              <div className="form-group align">
                <label for="user">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="user"
                  onChange={this.handleChange}
                  name="user"
                />
              </div>

              <div className="form-group align">
                <label for="phone">Phone number:</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  onChange={this.handleChange}
                  name="phone"
                />
              </div>

              <div className="form-group align">
                <label for="email">Email Id:</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  onChange={this.handleChange}
                  name="email"
                />
              </div>

              <div className="form-group align">
                <label for="city">Address:</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  onChange={this.handleChange}
                  name="city"
                />
              </div>

              <div className="form-group align">
                <label for="number">Number:</label>
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  onChange={this.handleChange}
                  name="number"
                />
              </div>

              <div className="form-group align">
                <label for="zip">zip Code:</label>
                <input
                  type="text"
                  className="form-control"
                  id="zipcode"
                  onChange={this.handleChange}
                  name="zipcode"
                />
              </div>

              <div className="form-group align">
                <label for="street">Street:</label>
                <input
                  type="text"
                  className="form-control"
                  id="street"
                  onChange={this.handleChange}
                  name="street"
                />
              </div>

              <div className="form-group align">
                <label for="lat">Latitude:</label>
                <input
                  type="text"
                  className="form-control"
                  id="lat"
                  onChange={this.handleChange}
                  name="lat"
                />
              </div>

              <div className="form-group align">
                <label for="long">Longitude:</label>
                <input
                  type="text"
                  className="form-control"
                  id="long"
                  onChange={this.handleChange}
                  name="long"
                />
              </div>
              <div className="form-group row">
                <button type="submit" className="btn btn-success">
                  Sign Up
                </button>
              </div>
              <div>{this.state.message}</div>
            </form>
          </Card>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

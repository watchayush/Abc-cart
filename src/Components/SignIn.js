import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import download from "process.env.PUBLIC_URL + '/pics/download.jpg'";
import { Card, NavLink } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";
// import LoginAction from "./Redux/Action/Action";
import { connect } from "react-redux";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
    };
  }

  validateUserAndPass = () => {};
  handleSubmit = (event) => {
    // this.validateUserAndPass();
    axios.get(`https://fakestoreapi.com/users`).then((res) => {
      const persons = res.data;
      console.log(persons);
      var flag = 0;
      persons.map((person) => {
        if (
          person.email == this.state.username &&
          person.password == this.state.password
        ) {
          flag = 1;
          this.props.dispatch(loggedIn(person));
        }
      });
      if (flag == 0) {
        this.setState({
          message: "You do not have an account. Please sign up",
        });
      }
      if (flag == 1) {
        this.setState({
          message: "You have an account",
        });
        // this.props.dispatch(loggedIn());
        console.log(typeof this.props.loggedIn_person.address.city);
        console.log(typeof this.props.loggedIn_person.address.geolocation);
        console.log(typeof this.props.loggedIn_person.address.geolocation.lat);
        console.log(typeof this.props.loggedIn_person.address.number);
        console.log(typeof this.props.loggedIn_person.address.street);
        console.log(typeof this.props.loggedIn_person.address.zipcode);
      }
    });
    event.preventDefault();
  };
  handleChange = (event) => {
    switch (event.target.name) {
      case "email":
        this.setState({ username: event.target.value });

        break;
      case "pwd":
        this.setState({ password: event.target.value });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div
        style={{
          height: "100%",
          position: "relative",
          top: "57px",
        }}
      >
        <Card
          style={{
            width: "40%",
            margin: "0 auto",
            height: "400px",
            marginTop: "35px",
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
          >
            <div class="form-group">
              <label for="email">Email address:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                style={{ width: "100%" }}
                onChange={this.handleChange}
                name="email"
              />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input
                type="password"
                class="form-control"
                id="pwd"
                style={{ width: "100%" }}
                onChange={this.handleChange}
                name="pwd"
              />
            </div>

            <button type="submit" class="btn btn-default">
              Submit
            </button>
            <a href="/signUp">SignUp</a>
          </form>
          {this.props.loggedIn_person != null ? (
            this.props.history.push("/")
          ) : (
            <div>{this.state.message}</div>
          )}
        </Card>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state.loggedIn_person);

  return {
    loggedIn_person: state.loggedIn_person,
  };
}

function loggedIn(person) {
  console.log("inside loggin In action function");
  return {
    type: "USER_LOGGEDIN",
    loggedIn_person: person,
  };
}

export default connect(mapStateToProps)(SignIn);

import React from "react";
import { Switch, Route } from "react-browser-router";
import Main from "./Components/Main";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Navbr from "./Components/Navbar/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: "0px",
    };
  }

  render() {
    return (
      <div className="App">
        <Navbr />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

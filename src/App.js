import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route } from "react-router-dom";
import Dashboard from "./components/admin/dashboard";
import Beers from "./components/beers";
import LoginForm from "./components/loginForm";
import { properties } from "./utils/properties.js";
import DisplayData from "./components/common/displayData";

class App extends Component {
  state = {
    user: "p",
  };

  updateUser = (user) => {
    console.log(user);
    this.setState({ user: user });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <div className="content">
          <Route
            path="/login"
            render={(props) => (
              <LoginForm {...props} updateUser={this.updateUser} />
            )}
          ></Route>
          <Route
            path="/all-beers"
            render={(props) => (
              <Beers
                {...props}
                uri={properties.uris.allBeersUri}
                headings={properties.allBeersColumns}
              />
            )}
          ></Route>
          <Route
            path="/tasted-beers"
            render={(props) => (
              <Beers
                {...props}
                uri={properties.uris.tastedBeersUri}
                headings={properties.tastedBeersColumns}
              />
            )}
          ></Route>
          <Route path="/new-arrivals" component={Dashboard}></Route>
          <Route path="/table" component={DisplayData}></Route>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

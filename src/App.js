import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route } from "react-router-dom";
import Dashboard from "./components/admin/dashboard";
import Beers from "./components/beers";
import LoginForm from "./components/loginForm";
import { properties } from "./utils/properties.js";
import DisplayData from "./components/common/displayData";
import jwtDecode from "jwt-decode";
import { BeerContext } from "./utils/context";
import Logout from "./components/logOut";

class App extends Component {
  componentDidMount() {

    console.log("App mounted");
    const jwt = localStorage.getItem("jwt");
    if (jwt !== null) {
      const user = jwtDecode(jwt);
      this.setState({ user: user.sub });
    }
  }

  componentDidUpdate(props, state) {
    console.log(props);
    console.log(state);
  }

  state = {
    user: "a",
  };

  updateUser = () => {
    const user = jwtDecode(localStorage.getItem("jwt"));
    this.setState({ user: user.sub });
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
                excludes={properties.allBeersExcludes}
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
                excludes={properties.tastedBeersExcludes}
              />
            )}
          ></Route>
          <Route
            path="/new-arrivals"
            render={(props) => (
              <Beers
                {...props}
                uri={properties.uris.newArrivalsUri}
                headings={properties.newArrivalsColumns}
                excludes={properties.newArrivalsExcludes}
              />
            )}
          ></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route path="/table" component={DisplayData}></Route>
          <Route
            exact
            path="/"
            render={(props) => (
              <LoginForm {...props} updateUser={this.updateUser} />
            )}
          ></Route>
        </div>
      </React.Fragment>
    );
  }
}

App.contextType = BeerContext;

export default App;

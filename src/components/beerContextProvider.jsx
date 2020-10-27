import { BeerContext } from "../utils/context";
import React, { Component } from "react";
import jwtDecode from "jwt-decode";

class BeerContextProvider extends Component {
  state = {
    isAuthenticated: () => this.checkAuthentication,
  };

  isAuthenticated = () => {
    const jwt = localStorage.getItem("jwt");

    if (jwt !== "") {
      try {
        const decode = jwtDecode(jwt);
        return true;
      } catch (ex) {
        return false;
      }
    } else return false;
  };

  render() {
    return (
      <BeerContext.Provider
        value={{
          isAuthenticated: () => this.isAuthenticated(),
          setAuthentication: (isAuthenticated) => {

            this.setState({ isAuthenticated: isAuthenticated });
          },
        }}
      >
        {this.props.children}
      </BeerContext.Provider>
    );
  }
}

export { BeerContextProvider, BeerContext };

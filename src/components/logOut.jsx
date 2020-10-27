import { Component } from "react";

class Logout extends Component {
  state = {};
  componentDidMount() {
    localStorage.removeItem("jwt");
    window.location = "/";
  }
  render() {
    return "";
  }
}

export default Logout;

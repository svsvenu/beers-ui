import React, { Component } from "react";
import { properties } from "../utils/properties";
import { callHttpPost } from "../utils/http";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.account);
    localStorage.removeItem("jwt");
    try {
      const data = {
        userName: this.state.account.username,
        password: this.state.account.password,
      };
      const url = properties.urls.loginUrl;
      const response = await callHttpPost(url, data);

      const jwt = response.data.jwt;
      console.log(jwt);
      if (jwt != null) {
        localStorage.setItem("jwt", jwt);
        this.props.updateUser(this.state.account.username);
        this.props.history.push("/all-beers");
      }
    } catch (ex) {
      console.log(ex.stack);
    }
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div className="w-25 p-3">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={this.state.account.username}
              onChange={this.handleChange}
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={this.state.account.password}
              onChange={this.handleChange}
              id="password"
              name="password"
              type="text"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

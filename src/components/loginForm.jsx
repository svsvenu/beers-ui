import React, { Component } from "react";
import { properties } from "../utils/properties";
import { callHttpPost } from "../utils/http";
import { BeerContext } from "./beerContextProvider";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validate();

    localStorage.removeItem("jwt");
    try {
      const data = {
        userName: this.state.account.username,
        password: this.state.account.password,
      };
      const url = properties.urls.loginUrl;
      const response = await callHttpPost(url, data);

      const jwt = response.data.jwt;
      if (jwt != null) {
        localStorage.setItem("jwt", jwt);
        this.props.updateUser();
        this.context.setAuthentication(true);
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

  validate = () => {
    const errors = {};
    if (this.state.account.username.trim() === "") {
      errors.userName = "user name is required";
      this.setState({ errors: errors });
    }

    return Object.keys(this.state.errors).length === 0
      ? null
      : this.state.errors;
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
          {this.state.errors.userName && (
            <div className="alert alert-danger">
              {this.state.errors.userName}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={this.state.account.password}
              onChange={this.handleChange}
              id="password"
              name="password"
              type="password"
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

LoginForm.contextType = BeerContext;

export default LoginForm;

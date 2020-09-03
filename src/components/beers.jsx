import React, { Component } from "react";
import axios from "axios";

class Beers extends Component {
  async componentDidMount() {
    console.log("component mounted");
    const response = await axios.get("http://localhost:8080/get-beers");
    let beers = response.data;
    console.log(response.data);
    this.setState({ beers: beers });
  }

  state = {
    beers: [],
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Beer name</th>
            <th>type</th>
            <th>brewery</th>
            <th>alcohol percentage</th>
          </tr>
        </thead>
        <tbody>
          {this.state.beers.map((beer) => (
            <tr>
              <td>{beer.id}</td>
              <td>type</td>
              <td>{beer.brewery}</td>
              <td>{beer.alcoholPercentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Beers;

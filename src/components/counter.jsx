import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/200",
    beers: ["bud light", "dos equis", "budweiser"],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <main className="container">
        <div>
          <span className="badge badge-primary m-2">{this.formatCount()}</span>
          <button
            onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <ul>
            {this.state.beers.map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
        </div>
      </main>
    );
  }
  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;

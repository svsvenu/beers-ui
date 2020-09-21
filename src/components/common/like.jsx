import React, { Component } from "react";

class Like extends Component {
  state = {
    currentState: "fa fa-heart-o",
  };
  changeStage = () => {
    if (this.state.currentState === "fa fa-heart") {
      this.setState({ currentState: "fa fa-heart-o" });
    } else {
      this.setState({ currentState: "fa fa-heart" });
    }
  };
  render() {
    return <i class={this.state.currentState} onClick={this.changeStage}></i>;
  }
}

export default Like;

import React, { Component } from "react";
import { callHttpGet } from "../../utils/http";
import { properties } from "../../utils/properties";

class Like extends Component {
  componentDidMount() {
    if (this.props.like === "like") {
      this.setState({ currentState: "fa fa-heart" });
    } else {
      this.setState({ currentState: "fa fa-heart-o" });
    }
  }

  state = {
    currentState: "",
  };

  changeStage = async () => {
    let className = "";
    let likeUnike = "";
    if (this.state.currentState === "fa fa-heart") {
      className = "fa fa-heart-o";
      likeUnike = "unlike";
    } else {
      className = "fa fa-heart";
      likeUnike = "like";
    }
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };
    const url =
      properties.urls.beersUrl +
      properties.uris.likeUri +
      "/" +
      this.props.id +
      "/" +
      likeUnike;
    try {
      await callHttpGet(url, headers);
    } catch (ex) {
      console.log(ex.stack);
      this.props.history.push("/login");
    }

    this.setState({ currentState: className });
  };
  componentDidMount() {
    if (this.props.like === "like") {
      this.setState({ currentState: "fa fa-heart" });
    } else {
      this.setState({ currentState: "fa fa-heart-o" });
    }
  }

  componentDidUpdate(prevProps, prevStage) {}

  render() {
    return (
      <i className={this.state.currentState} onClick={this.changeStage}></i>
    );
  }
}

export default Like;

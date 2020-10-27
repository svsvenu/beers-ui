import React, { Component } from "react";
import { paginate } from "../utils/paginate";
import ListGroup from "./listGroup";
import { DisplayTable } from "../components/common/displayTable";
import { properties } from "../utils/properties";
import { callHttpGet } from "../utils/http";
import { BeerContext } from "./beerContextProvider";

class Beers extends Component {
  async componentDidMount() {
    try {
      if (localStorage.getItem("jwt") === "") {
        this.props.history.push("/");
      }
      const headers = {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      };
      const url = properties.urls.beersUrl + this.props.uri;
      const response = await callHttpGet(url, headers);

      if (response.status !== 200) {
        localStorage.removeItem("jwt");
        this.props.history.push("/login");
        this.context.setAuthentication(false);
      }

      let beers = response.data;
      const beersOnPage = paginate(beers, 1, properties.beersPerPage);

      this.setState({ beers: beers });
      this.setState({ beersOnPage: beersOnPage });
    } catch (ex) {
      console.log(ex.stack);
      console.log("*********");
      this.context.setAuthentication(false);
      localStorage.removeItem("jwt");
      this.props.history.push("/");
    }
  }

  state = {
    beers: [],
    currentPage: 1,
    selectedStyle: "",
  };

  handleStyleSelect = (style) => {
    //  this.setState({ beersOnPage: beersByStyle });
    //  this.state.selectedStyle = style;
    this.setState({ selectedStyle: style });
    console.log(style);
  };

  onPageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
    //  const beersOnPage = paginate(this.state.beers, page, 5);
    //  this.setState({ beersOnPage: beersOnPage });
  };

  render() {

    const { selectedStyle, beers } = this.state;

    let beersToDisplay = selectedStyle
      ? this.state.beers.filter(
        (beer) => beer.style === this.state.selectedStyle
      )
      : beers;

    /* let beersToDisplay = this.state.beers.filter(
      (beer) => beer.style === this.state.selectedStyle
    ); */

    let beersOnPage = paginate(beersToDisplay, this.state.currentPage, 5);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            selectedStyle={this.state.selectedStyle}
            onStyleSelect={this.handleStyleSelect}
          />
        </div>
        <DisplayTable
          table={beersOnPage}
          headings={this.props.headings}
          rowCount={beersToDisplay.length}
          onPageChange={this.onPageChange}
          currentPage={this.state.currentPage}
          excludes={this.props.excludes}
        />
      </div>
    );
  }
}

Beers.contextType = BeerContext;

export default Beers;

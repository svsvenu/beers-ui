import { NavLink } from "react-router-dom";
import { BeerContext } from "./beerContextProvider";
import React, { Component } from "react";

class NavBar extends Component {
  render() {
    console.log("Nav bar rendered");
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                {this.context.isAuthenticated() === "" && (
                  <NavLink className="nav-link" to="/login">
                    Login <span className="sr-only">(current)</span>
                  </NavLink>
                )}
              </li>
              {this.context.isAuthenticated() && (
                <React.Fragment>
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/all-beers">
                      All-Beers <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/tasted-beers">
                      Tasted-beers
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/new-arrivals">
                      New arrivals
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/new-arrivals">
                      {this.props.user}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/logout">
                      Logout
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

NavBar.contextType = BeerContext;
export default NavBar;

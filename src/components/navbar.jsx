import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
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
              <NavLink className="nav-link" to="/login">
                Login <span className="sr-only">(current)</span>
              </NavLink>
            </li>
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
                {props.user}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

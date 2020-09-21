import React, { Component } from "react";
import _ from "lodash";
import { properties } from "../../utils/properties";

class Pagination extends Component {
  state = {};
  componentDidMount() {
    console.log("pagination mounted");
  }
  render() {
    let pageSize = properties.beersPerPage;
    const currentPage = this.props.currentPage;
    const rowCount = this.props.rowCount;
    const pageCount = rowCount / pageSize;
    const pages = _.range(1, pageCount + 1);
    return (
      <nav className="navbar">
        <ul className="pagination">
          {pages.map((page) => {
            return (
              <li
                key={page}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => this.props.onPageChange(page)}
                >
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export { Pagination };

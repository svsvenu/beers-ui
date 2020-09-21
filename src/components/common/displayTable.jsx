import React, { Component } from "react";
import { Pagination } from "./pagination";
import Like from "./like";

class DisplayTable extends Component {
  state = {};
  render() {
    console.log(this.props.data);
    let excludes = ["beerId"];
    let headings = this.props.headings;

    let table = this.props.table;
    //  console.log(table);

    return (
      <div className="col">
        <table className="table">
          <thead>
            <tr>
              {headings.map((row) => (
                <th>{row}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.map((row) => (
              <tr>
                {Object.keys(row).map((key) =>
                  excludes.includes(key) === true ? (
                    ""
                  ) : (
                    <td>
                      <a href="/table">{row[key]}</a>{" "}
                    </td>
                  )
                )}
                <Like />{" "}
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination {...this.props} />
      </div>
    );
  }
}

export { DisplayTable };

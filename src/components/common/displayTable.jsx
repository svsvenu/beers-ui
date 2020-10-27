import React, { Component } from "react";
import { Pagination } from "./pagination";
import Like from "./like";
import CheckBox from "./CheckBox";

class DisplayTable extends Component {
  state = {};

  processFields = () => {
    let table = this.props.table;

    table.map((row) => {
      Object.keys(row).map((key) => {
        console.log(row[key]);
        row[key] = row[key] + "a";
      });
    });
  };
  render() {
    let excludes = this.props.excludes;
    let headings = this.props.headings;

    let table = this.props.table;

    //   this.processFields();

    return (
      <div className="col">
        <table className="table">
          <thead>
            <tr>
              {headings.map((row) => (
                <th key={row}>{row}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.map((row, index) => (
              <tr key={"tr" + row["drinkerBeerId"]}>
                {Object.keys(row).map((key, index1) =>
                  excludes.includes(key) === true ? null : (
                    <td key={"td-" + row["drinkerBeerId"] + "-" + index1}>
                      {key === "tasted" ? (
                        <CheckBox
                          key={"checkbox-" + row["drinkerBeerId"]}
                          tasted={row["tasted"]}
                          beerId={row["drinkerBeerId"]}
                        />
                      ) : key === "liked" ? (
                        <Like
                          key={"like-" + row["drinkerBeerId"]}
                          like={row[key]}
                          id={row["drinkerBeerId"]}
                        />
                      ) : (
                        <a href="/table">{row[key]}</a>
                      )}
                    </td>
                  )
                )}
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

import React, { Component } from "react";

//https://www.bootdey.com/snippets/view/Table-user-information#html

class DisplayData extends Component {
  state = {};
  render() {
    return (
      <div class="container bootstrap snippets bootdey">
        <br />
        <br />

        <div class="panel-body inf-content">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <strong>Information</strong>
              <br />
              <br />
              <div class="table-responsive">
                <table class="table table-user-information">
                  <tbody>
                    <tr>
                      <td>
                        <strong>
                          <span class="fa fa-bluetooth  text-primary"></span>
                          Identificacion
                        </strong>
                      </td>
                      <td class="text-primary">123456789</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>
                          <span class="fa fa-bluetooth  text-primary"></span>
                          Name
                        </strong>
                      </td>
                      <td class="text-primary">Bootdey</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayData;

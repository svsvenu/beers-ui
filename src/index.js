import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { BeerContextProvider } from "./components/beerContextProvider";

console.warn = () => { }
ReactDOM.render(
  <BeerContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BeerContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

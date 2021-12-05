import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./Store";
import "bootstrap/dist/css/bootstrap.min.css"
ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById("root")
);

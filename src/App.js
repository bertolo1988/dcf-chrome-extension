import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.min";
import "./assets/css/style.css";
import ReactDOM from "react-dom";
import React from "react";
import ControlledTabs from "./ControlledTabs";

function App() {
  return <ControlledTabs />;
}

ReactDOM.render(<App />, document.getElementById("app"));

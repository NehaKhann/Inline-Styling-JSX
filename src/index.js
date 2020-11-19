import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid purple"
};

customStyle.color = "green";

ReactDOM.render(
  <h1 style={customStyle}>Neha Khan!</h1>,
  document.getElementById("root")
);

import React from "react";

function Box(props) {

  var boxStyle = {
    display: "inline-block",
    backgroundColor: "#e0e0e0",
    height: "50px",
    width: "50px",
    marginTop: "10px",
    marginLeft: "10px",
  }

  return (
      <div style={boxStyle}>
      </div>
  );
}

export default Box;

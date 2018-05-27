import React from "react";

function What(props) {

  var whatStyle = {
    height: "75px",
    width: "279px",
    backgroundColor: "#c4daff",
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: ".5px",
  }

  var inputStyle = {
    display: "inline-block",
    height: "20px",
    width: "180px",
    marginTop: "20px",
    float: "right",
    marginRight: "15px"
  }

  var boxStyle = {
    display: "inline-block",
    backgroundColor: "white",
    height: "50px",
    width: "50px",
    marginTop: "10px",
    marginLeft: "10px",
  }

  return (
    <div>
      <div style={whatStyle}>
        <div style={boxStyle}>
        </div>
        <input style={inputStyle} placeholder="Whats happening..."/>
      </div>
    </div>
  );
}

export default What;

import React from "react";
import Box from "./Box";

function Tweet(props) {

  var tweetStyle = {
    backgroundColor: "#ffeaea",
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: ".5px",
  }

  var textStyle = {
    // display: "inline-block",
    padding: "4px",
    marginTop: "0px",
    marginBottom: "8px"
  }

  var textPart = {
    display: "inline-block"
  }

  var userStyle = {
    marginTop: "2px",
    marginBottom: "0px",
    padding: "4px"
  }

  return (
    <div>

      <div style={tweetStyle}>
        <Box/>
        <div style={textPart}>
          <h6 style={userStyle}>User Name</h6>
          <p style={textStyle}> This is my bad ass tweet!</p>
        </div>
      </div>

      <div style={tweetStyle}>
        <Box/>
        <div style={textPart}>
          <h6 style={userStyle}>User Name</h6>
          <p style={textStyle}> This is my bad ass tweet!</p>
        </div>
      </div>

      <div style={tweetStyle}>
        <Box/>
        <div style={textPart}>
          <h6 style={userStyle}>User Name</h6>
          <p style={textStyle}> This is my bad ass tweet!</p>
        </div>
      </div>

      <div style={tweetStyle}>
        <Box/>
        <div style={textPart}>
          <h6 style={userStyle}>User Name</h6>
          <p style={textStyle}> This is my bad ass tweet!</p>
        </div>
      </div>

    </div>
  );
}

export default Tweet;

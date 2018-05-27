import React from "react";
import Box from "./Box";

function Suggestions(props) {

  var suggestions = {
    width: '280px',
    height: '320px',
    borderStyle: "solid",
    borderWidth: "2px"
  }

  var titleStyle = {
    paddingLeft: "10px",
    paddingTop: "5px"
  }

  var groupInfo = {
    display: "inline-block",
    paddingLeft: "10px",
  }

  var nameStyle = {
    marginBottom: "5px"
  }

  var buttonStyle = {
    marginBottom: "8px"
  }

  return (
    <div style={suggestions}>
      <p style={titleStyle}><strong>SUGGESTIONS</strong></p>
      <div>
        <Box/>
        <div style={groupInfo}>
          <p style={nameStyle}><strong>User</strong></p>
          <button style={buttonStyle}>Add</button>
        </div>
        <hr/>
      </div>

      <div>
        <Box/>
        <div style={groupInfo}>
          <p style={nameStyle}><strong>User</strong></p>
          <button style={buttonStyle}>Add</button>
        </div>
        <hr/>
      </div>

      <div>
        <Box/>
        <div style={groupInfo}>
          <p style={nameStyle}><strong>User</strong></p>
          <button style={buttonStyle}>Add</button>
        </div>
        <hr/>
      </div>

    </div>
  );
}

export default Suggestions;

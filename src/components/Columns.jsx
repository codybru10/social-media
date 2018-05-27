import React from "react";
import Profile from "./Profile";
import Info from "./Info";
import Feed from "./Feed";
import Suggestions from "./Suggestions";

function Columns(props) {

  var tableWidth = {
    width: "100%"
  }

  var column = {
    float: "left",
    width: "30%",
    padding: "10px",
    height: "300px"
  }

  return (

    <table style={tableWidth}>
      <tbody>
        <tr>
          <td style={column}>
            <Profile/>
            <Info/>
          </td>
          <td style={column}>
            <Feed/>
          </td>
          <td style={column}>
            <Suggestions/>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Columns;

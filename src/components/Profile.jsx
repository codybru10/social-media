import React from "react";

function Profile(props) {

  var tableWidth = {
    width: "100%"
  }

  var column = {
    float: "left",
    width: "30%",
    padding: "10px",
    height: "300px"
  }

  var profileWell = {
    width: '280px',
    height: '220px',
    borderStyle: "solid",
    borderWidth: "2px",
  }

  var info = {
    width: '280px',
    height: '220px',
    borderStyle: "solid",
    borderWidth: "2px",
    marginTop: '10px'
  }

  var feed = {
    width: '280px',
    height: '100%',
    borderStyle: "solid",
    borderWidth: "2px"
  }

  return (

    <table style={tableWidth}>
      <tbody>
        <tr>
          <td style={column}>
            <div style={profileWell}>
              Profile
            </div>
            <div style={info}>
              Info
            </div>
          </td>
          <td style={column}>
            <div style={feed}>
              Feed
            </div>
          </td>
          <td style={column}>Right</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Profile;

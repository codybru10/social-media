import React from "react";

function Profile(props) {

  var topHalfStyle = {
    backgroundColor: "#6499f4",
    width: '284px',
    height: '130px',
    padding: '5px'
  }

  var bottomHalfStyle = {
    backgroundColor: "white",
    width: '280px',
    height: '90px',
    borderStyle: "solid",
    borderColor: "#d0d8e5",
    borderWidth: "2px",
    padding: '5px'
  }

  var userInfoStyle = {
    fontSize: "10px",
    display: "inline-block",
    paddingRight: "6px"
  }



  return (
    <div>
      <div style={topHalfStyle}>

      </div>
      <div style={bottomHalfStyle}>

        <p><strong>Cody Brubaker</strong></p>
        <div>
          <p style={userInfoStyle}>TWEETS</p>
          <p style={userInfoStyle}>FOLLOWING</p>
          <p style={userInfoStyle}>FOLLOWERS</p>
        </div>

      </div>
    </div>
  );
}

export default Profile;

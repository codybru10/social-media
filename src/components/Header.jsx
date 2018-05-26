import React from "react";

function Header(props) {
  var navStyle = {
    // backgroundColor: '#ecf0f1',
  }

  var inline = {
    display: 'inline-block',
    borderStyle: 'solid',
    borderWidth: '1px',
    padding: '4px'
  }

  var searchInput = {
    display: 'inline-block',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'blue',
    borderRadius: '25px',
    padding: '4px',
    float: 'right',
    marginRight: '35px',
    marginTop: '25px'
  }

  var tweetBtn = {
    display: 'inline-block',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'blue',
    borderRadius: '25px',
    padding: '4px',
    float: 'right',
    marginRight: '50px',
    marginTop: '25px'
  }


  return (
    <div style={navStyle}>
      <h3 style={inline}>Home</h3>
      <h3 style={inline}>Notifications</h3>
      <h3 style={inline}>Messages</h3>
      <button style={tweetBtn}>Tweet</button>
      <input style={searchInput} placeholder={'search'}/>
    </div>
  );
}

export default Header;

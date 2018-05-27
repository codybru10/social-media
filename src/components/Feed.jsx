import React from "react";
import Tweet from "./Tweet";
import What from "./What";

function Feed(props) {

  var feed = {
    width: '280px',
    height: '500px',
    borderStyle: "solid",
    borderWidth: "2px"
  }

  return (
    <div style={feed}>
      <What/>
      <Tweet/>
    </div>
  );
}

export default Feed;

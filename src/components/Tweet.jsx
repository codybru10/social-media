import React from "react";

function Tweet(props) {

  var tweetStyle = {
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: ".5px",
  }

  var textStyle = {
    padding: "4px"
  }

  return (
    <div>
      <div style={tweetStyle}>
        <p style={textStyle}> This is my bad ass tweet!</p>
      </div>
      <div style={tweetStyle}>
        <p style={textStyle}> This is my bad ass tweet, with some more mumbo jumbo because I dont know what to talk about</p>
      </div>
      <div style={tweetStyle}>
        <p style={textStyle}> This is another tweet for demonstration, I am not going to say too much that makes sense because I dont really have anyting to say.</p>
      </div>
      <div style={tweetStyle}>
        <p style={textStyle}> This is my first tweet, woah</p>
      </div>
    </div>
  );
}

export default Tweet;

import React, { useState } from 'react';
import './App.css';

function App(props) {
  var viesti = "";

  //asetetaan viestimuuttuja propsin pituudesta riippuen
  //if-else kuten javascriptissa
  if (props.message.length < 10) {
    viesti = props.message;
  } else {
    viesti = "Too long";
  }

  return (
    <div className="App">
      {viesti}
    </div>
  );
}

export default App;


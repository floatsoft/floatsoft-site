import React, { Component } from "react";
import Header from "../../components/Header";
import logo from "images/react-logo.svg";

import "typeface-ibm-plex-mono";
import "typeface-ubuntu-mono";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-background">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <section className="App-content-section">
          <Header />
        </section>
      </div>
    );
  }
}

export default App;

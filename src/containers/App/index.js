import React, { Component } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import AboutSection from "../../components/AboutSection";
import SoftwareSection from "../../components/SoftwareSection";

import logo from "images/react-logo.svg";

import "typeface-ibm-plex-mono";
import "typeface-ubuntu-mono";

import "react-typist/dist/Typist.css";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-background">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Header />
        <AboutSection />
        <SoftwareSection />
        <Footer />
      </div>
    );
  }
}

export default App;

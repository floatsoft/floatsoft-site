import React, { Component } from "react";
import TrackVisibility from "react-on-screen";

import Header from "../../components/Header";
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
        <section className="App-content-section">
          <Header />
          <div style={{ height: "300vh" }}>
            <TrackVisibility once>
              {({ isVisible }) => isVisible && <AboutSection />}
            </TrackVisibility>
            <TrackVisibility once>
              {({ isVisible }) => isVisible && <SoftwareSection />}
            </TrackVisibility>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

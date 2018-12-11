import React, { PureComponent } from "react";

import SectionTitle from "../SectionTitle";

import "./AboutSection.scss";

class AboutSection extends PureComponent {
  render() {
    return (
      <section id="Software" className="AboutSection-section">
        <SectionTitle>About Open Source</SectionTitle>
      </section>
    );
  }
}

export default AboutSection;

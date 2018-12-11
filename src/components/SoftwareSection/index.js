import React, { PureComponent } from "react";

import SectionTitle from "../SectionTitle";

import "./SoftwareSection.scss";

class SoftwareSection extends PureComponent {
  render() {
    return (
      <section id="Software" className="SoftwareSection-section">
        <SectionTitle>Software for Developers</SectionTitle>
      </section>
    );
  }
}

export default SoftwareSection;

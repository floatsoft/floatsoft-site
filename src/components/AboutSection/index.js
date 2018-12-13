import React, { PureComponent } from "react";
import TrackVisibility from "react-on-screen";
import ScrollableAnchor from "react-scrollable-anchor";

import SectionTitle from "../SectionTitle";

import "./AboutSection.scss";

class AboutSection extends PureComponent {
  render() {
    return (
      <ScrollableAnchor id="about">
        <section className="AboutSection-section">
          <TrackVisibility partialVisibility once>
            {({ isVisible }) =>
              isVisible && <SectionTitle>About Open Source</SectionTitle>
            }
          </TrackVisibility>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default AboutSection;

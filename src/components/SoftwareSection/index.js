import React, { PureComponent } from "react";
import TrackVisibility from "react-on-screen";
import ScrollableAnchor from "react-scrollable-anchor";

import SectionTitle from "../SectionTitle";

import "./SoftwareSection.scss";

class SoftwareSection extends PureComponent {
  render() {
    return (
      <ScrollableAnchor id="software">
        <TrackVisibility
          partialVisibility
          once
          tag="section"
          className="SoftwareSection-section"
        >
          {({ isVisible }) =>
            isVisible && <SectionTitle>Software for Developers</SectionTitle>
          }
        </TrackVisibility>
      </ScrollableAnchor>
    );
  }
}

export default SoftwareSection;

import React from "react";
import Typist from "react-typist";

import "./SectionTitle.scss";

function SectionTitle({ children: title }) {
  return (
    <h1 className="Section-title">
      <em>
        <Typist>{title}</Typist>
      </em>
    </h1>
  );
}

export default SectionTitle;

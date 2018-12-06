import React, { PureComponent } from "react";

import "./Header.scss";

class Header extends PureComponent {
  render() {
    return (
      <header className="Header">
        <h1 className="Header-title">
          <em>floatsoft</em>
        </h1>
        <span className="Header-seperator">|</span>
        <span className="Header-subtitle">pure software</span>
      </header>
    );
  }
}

export default Header;

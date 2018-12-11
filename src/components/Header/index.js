import React, { PureComponent, Fragment } from "react";
import TrackVisibility from "react-on-screen";
import Typist from "react-typist";

import Icon from "@mdi/react";
import { mdiGithubCircle } from "@mdi/js";

import "./Header.scss";

class Header extends PureComponent {
  render() {
    return (
      <Fragment>
        <nav className="Header">
          <a className="Header-title" href="#">
            <h1>
              <em>floatsoft</em>
            </h1>
          </a>
          <a className="Header-link" href="#">
            About
          </a>
          <a className="Header-link" href="#">
            Software
          </a>
          <a
            className="Header-link"
            href="https://github.com/floatsoft"
            target="_blank"
          >
            <Icon path={mdiGithubCircle} size={1} />
          </a>
        </nav>

        <header className="Header Header_style_hero">
          <h1 className="Header-title">
            <TrackVisibility partialVisibility once tag="em">
              {({ isVisible }) =>
                isVisible && (
                  <Typist>
                    <Typist.Delay ms={1000} />
                    floatsoft
                  </Typist>
                )
              }
            </TrackVisibility>
          </h1>
        </header>
      </Fragment>
    );
  }
}

export default Header;

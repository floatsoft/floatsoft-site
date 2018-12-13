import React, { PureComponent, Fragment } from "react";
import TrackVisibility from "react-on-screen";
import Typist from "react-typist";
import ScrollableAnchor from "react-scrollable-anchor";

import Icon from "@mdi/react";
import {
  mdiGithubCircle,
  mdiChevronDown,
  mdiChevronRight,
  mdiMenuOpen
} from "@mdi/js";

import MenuDrawer from "../MenuDrawer";
import "./Header.scss";
function NavigationLinks({ showForMedium, toggleDrawer = () => {} }) {
  return (
    <Fragment>
      <a
        className={`Header-link${showForMedium ? " show-for-medium" : ""}`}
        href="#about"
        onClick={toggleDrawer}
      >
        About
      </a>
      <a
        className={`Header-link${showForMedium ? " show-for-medium" : ""}`}
        href="#software"
        onClick={toggleDrawer}
      >
        Software
      </a>
      <a
        className={`Header-link${showForMedium ? " show-for-medium" : ""}`}
        href="https://github.com/floatsoft"
        target="_blank"
        rel="noopener noreferrer"
        onClick={toggleDrawer}
      >
        {!showForMedium && "GitHub\u00A0"}
        <Icon path={mdiGithubCircle} size={1} />
      </a>
    </Fragment>
  );
}

class Header extends PureComponent {
  state = {
    isMenuDrawerOpen: false
  };

  toggleDrawer = event => {
    event.stopPropagation();
    this.setState(({ isMenuDrawerOpen }) => ({
      isMenuDrawerOpen: !isMenuDrawerOpen
    }));
  };
  render() {
    const { isMenuDrawerOpen } = this.state;
    return (
      <Fragment>
        <nav className="Header">
          <a className="Header-title" href="#~">
            <h1>
              <em>floatsoft</em>
            </h1>
          </a>
          <NavigationLinks showForMedium />
          <button
            onClick={this.toggleDrawer}
            className="Header-link Header-MenuDrawer-toggle-button hide-for-medium"
          >
            <Icon path={mdiMenuOpen} size={1.25} />
          </button>
          <MenuDrawer
            isOpen={isMenuDrawerOpen}
            toggleDrawer={this.toggleDrawer}
          >
            <button
              onClick={this.toggleDrawer}
              className="Header-link Header-MenuDrawer-toggle-button"
            >
              <Icon path={mdiChevronRight} size={1.25} />
            </button>
            <NavigationLinks toggleDrawer={this.toggleDrawer} />
          </MenuDrawer>
        </nav>

        <ScrollableAnchor id="~">
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
            <a href="#about">
              <Icon path={mdiChevronDown} size={5} />
            </a>
          </header>
        </ScrollableAnchor>
      </Fragment>
    );
  }
}

export default Header;

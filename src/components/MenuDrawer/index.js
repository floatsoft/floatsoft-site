import React, { PureComponent, Fragment } from "react";
import ReactDOM from "react-dom";

import "./MenuDrawer.scss";

const rootRef = document.getElementById("root");

class MenuDrawer extends PureComponent {
  render() {
    const { children, isOpen, toggleDrawer } = this.props;
    return ReactDOM.createPortal(
      <Fragment>
        <button
          className={`MenuDrawer-background ${
            isOpen
              ? "MenuDrawer-background-open"
              : "MenuDrawer-background-closed"
          }`}
          onClick={toggleDrawer}
        />
        <div
          className={`MenuDrawer ${
            isOpen ? "MenuDrawer-open" : "MenuDrawer-closed"
          }`}
        >
          {children}
        </div>
      </Fragment>,
      rootRef
    );
  }
}

export default MenuDrawer;

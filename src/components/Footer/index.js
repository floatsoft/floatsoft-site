import React from "react";

import Icon from "@mdi/react";
import { mdiGithubCircle } from "@mdi/js";

import "./Footer.scss";

const copyrightDate = new Date().getFullYear();

function Footer() {
  return (
    <footer className="Footer">
      <a className="Footer-title" href="#~">
        <code>
          <em>© floatsoft {copyrightDate}</em>
        </code>
      </a>
      <a
        className="Footer-link"
        href="https://github.com/floatsoft"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon path={mdiGithubCircle} size={0.875} />
      </a>
    </footer>
  );
}

export default Footer;

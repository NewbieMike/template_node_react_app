import React from "react";
import PropTypes from "prop-types";

import { HashLink } from "react-router-hash-link";
// import LanguageIcon from "@material-ui/icons/Language";
import "./Header.css";
// import { Link } from "react-router-dom";

const Component = ({ className }) => {
  return (
    <nav className="navigation_bar">
      <div className="header_column">
        <HashLink to="/#Home" smooth>
          Logo
        </HashLink>
      </div>
      <div className="header_column">
        <HashLink to="/#Home" smooth>
          Strona główna
        </HashLink>
        <HashLink to="/#About" smooth>
          O Nas
        </HashLink>
        <HashLink to="/#Contact" smooth>
          Kontakt
        </HashLink>
      </div>
      {/* <div className="header_column">
        <Link to="/UA" className="flag-icon">
          <LanguageIcon /> UA
        </Link>
      </div> */}
    </nav>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Header, Component as HeaderComponent };

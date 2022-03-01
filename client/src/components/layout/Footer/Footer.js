import React from "react";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";

import "./Footer.css";

import FacebookIcon from "@material-ui/icons/Facebook";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
const Component = ({ className }) => {
  return (
    <div className="container-footer">
      <div className="column_footer">
        <h3>Nawigacja</h3>
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
      <div className="column_footer">
        <h3>Kontakt</h3>
        {/* <p>Cracow, Poland</p> */}
        <a href="tel:+123456789">+48 123456789</a>
        <a href="mailto:mail@mail.com">email@email.com</a>
      </div>
      <div className="column_footer">
        <h3>Znajdziesz Nas tutaj</h3>
        <div>
          <a href="/">
            <FacebookIcon />
          </a>
          {/* <a href="/">
            <InstagramIcon />
          </a>
          <a href="/">
            <TwitterIcon />
          </a> */}
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Footer,
  //Container as Footer,
  Component as FooterComponent,
};

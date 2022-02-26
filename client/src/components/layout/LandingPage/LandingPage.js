import React from "react";

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <img src="" alt="" className="main-background" />
      <div className="landing-page-content-container">
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <a href="/#bottom">{props.button}</a>
      </div>
    </div>
  );
};

export default LandingPage;

import React from "react";

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <img
        src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
        className="main-background"
      />
      <div className="landing-page-content-container">
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
      </div>
      <a href="/#bottom" className="main-btn">
        {props.button}
      </a>
    </div>
  );
};

export default LandingPage;

import React from "react";
import "./AboutUs.css";
const AboutUs = (props) => {
  return (
    <div className="aboutUs-container" id="About">
      <h2 className="title">{props.title}</h2>
      <div className="container">
        <div className="about-content">
          <p>
            {props.text}
            <br />
            <br />
            {props.text2}
            <br />
            <br />
            {props.text3}
          </p>
          <img
            src={
              "https://images.pexels.com/photos/2987769/pexels-photo-2987769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
            alt=""
          />
        </div>
        {/* <div className="about-services">
          <div className="service-card">
            <h6>{props.serviceTitle1}</h6>
            <p>{props.serviceDescription1}</p>
          </div>
          <div className="service-card">
            <h6>{props.serviceTitle2}</h6>
            <p>{props.serviceDescription2}</p>
          </div>
          <div className="service-card">
            <h6>{props.serviceTitle3}</h6>
            <p>{props.serviceDescription3}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;

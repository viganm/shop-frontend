import React from "react";
import LandingTitle from "./LandingTitle";
import backgroundImage from "../../vid/bgvid_1_1.webm"; // Import the background video

import "./Landing.css";

const Landing = () => {
  return (
    <>
    <div className="wrapper">
      <LandingTitle backgroundImage={backgroundImage} />
      <div>
          <a href="/shop" className="centered_buy">
            <button className="btn">Buy Now</button>
          </a>
        </div>
      </div>
      <div className="landing_page">
        <video className="background_video" autoPlay loop muted>
          <source src={backgroundImage} type="video/webm" />
        </video>
      </div>
    </>
  );
};

export default Landing;

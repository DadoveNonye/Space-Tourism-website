import React from "react";
import spaceCapsuleImageMobile from "../assets/image-space-capsule-landscape.jpg";
import spaceCapsuleImageDesktop from "../assets/image-space-capsule-portrait.jpg";
import Navbar from "../Components/Navbar";
import data from "../data";
import technologyCss from "../CSS/Technology.css";

function SpaceCapsule() {
  return (
    <div className="body technologyBackground ">
      <Navbar />
      <p className="launch-div">
        <span>03</span> SPACE LAUNCH 101
      </p>
      <div className="tech-body-content">
        <div className="tech-image-div">
          <img
            className="technology-image-mobile"
            src={spaceCapsuleImageMobile}
          />
          <img
            className="technology-image-desktop"
            src={spaceCapsuleImageDesktop}
          />
        </div>
        <div className="tech-text-content">
          <div className="tech-circle">
            <a href="/technology">1</a>
            <a href="/spacecapsule">2</a>
            <a href="/spaceport">3</a>
          </div>
          <div className="tech-text">
            <h4 className="technology">THE TECHNOLOGY...</h4>
            <h1 className="lau">{data.technology[2].name}</h1>
            <p>{data.technology[2].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaceCapsule;

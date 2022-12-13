import React from "react";
import spaceportImageMobile from "../assets/image-spaceport-landscape.jpg";
import spaceportImageDesktop from "../assets/image-spaceport-portrait.jpg";
import Navbar from "../Components/Navbar";
import data from "../data";
import technologyCss from "../CSS/Technology.css";

function Spaceport() {
  return (
    <div className="body technologyBackground ">
      <Navbar />
      <p className="launch-div">
        <span>03</span> SPACE LAUNCH 101
      </p>
      <div className="tech-body-content">
        <div className="tech-image-div">
          <img className="technology-image-mobile" src={spaceportImageMobile} />
          <img
            className="technology-image-desktop"
            src={spaceportImageDesktop}
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
            <h1 className="lau">{data.technology[1].name}</h1>
            <p>{data.technology[1].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spaceport;

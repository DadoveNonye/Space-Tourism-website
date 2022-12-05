import React from "react";
import technologyImageMobile from "../assets/image-launch-vehicle-landscape.jpg";
import technologyImageDesktop from "../assets/image-launch-vehicle-portrait.jpg";
import Navbar from "./Navbar";
import technologyCss from "../CSS/Technology.css";

function Technology() {
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
            src={technologyImageMobile}
          />
          <img
            className="technology-image-desktop"
            src={technologyImageDesktop}
          />
        </div>
        <div className="tech-text-content">
          <div className="tech-circle">
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
          </div>
          <div className="tech-text">
            <h4 className="technology">THE TECHNOLOGY...</h4>
            <h1 className="lau">LAUNCH VEHICLE</h1>
            <p>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;

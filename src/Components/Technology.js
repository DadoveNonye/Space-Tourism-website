import React from "react";
import technologyImage from "../assets/image-launch-vehicle-landscape.jpg";
import Navbar from "./Navbar";
import technologyCss from "../CSS/Technology.css";

function Technology() {
  return (
    <div className="body technologyBackground ">
      <Navbar />
      <p>
        <span>03</span> SPACE LAUNCH 101
      </p>
      <div>
        <img className="technology-image" src={technologyImage} />
      </div>
      <div className="tech-circle">
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
      </div>
      <h4 className="technology">THE TECHNOLOGY...</h4>
      <h1 className="lau">LAUNCH VEHICLE</h1>
      <p>
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
        carry a payload from Earth's surface to space, usually to Earth orbit or
        beyond. Our WEB-X carrier rocket is the most powerful in operation.
        Standing 150 metres tall, it's quite an awe-inspiring sight on the
        launch pad!,
      </p>
    </div>
  );
}

export default Technology;

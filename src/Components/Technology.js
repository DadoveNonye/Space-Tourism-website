import React from "react";
import technologyImage from "../assets/image-launch-vehicle-landscape.jpg";
import Navbar from "./Navbar";

function Technology() {
  return (
    <div className="body">
      <Navbar />
      <p>
        <span>03</span>SPACE LAUNCH 101
      </p>
      <div className="technology">
        <img width="350px" src={technologyImage} />
      </div>
    </div>
  );
}

export default Technology;

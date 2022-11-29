import React from "react";
import DestinationCss from "../CSS/Destination.css";
import Mars from "../assets/image-mars.png";
import Navbar from "./Navbar";

function Destination() {
  return (
    <div className="body">
      <Navbar />
      <div>
        <h4>
          <span>04</span> PICK YOUR DESTINATION
        </h4>
        <div className="Mars-image">
          <img width="200px" src={Mars} />
        </div>
        <ul className="DestinationUL">
          <li>
            <a>MOON</a>
          </li>
          <li>
            <a>MARS</a>
          </li>
          <li>
            <a>EUROPA</a>
          </li>
          <li>
            <a>TITAN</a>
          </li>
        </ul>
        <h1 className="mars">MARS</h1>
        <p className="mars-text">
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!,
        </p>
        <hr className="underline" />
        <p>AVG. DISTANCE</p>
        <h2 className="destination-distance">225 mil. km</h2>
      </div>
    </div>
  );
}

export default Destination;

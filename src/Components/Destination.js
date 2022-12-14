import React from "react";
import DestinationCss from "../CSS/Destination.css";
import Mars from "../assets/image-mars.png";
import Navbar from "./Navbar";
import data from "../data";

function Destination() {
  return (
    <div className="body destinationBackground">
      <Navbar />
      <div className="destination-body">
        <div className="first">
          <h4>
            <span>01</span> PICK YOUR DESTINATION
          </h4>
          <div className="Mars-image">
            <img width="200px" src={Mars} />
          </div>
        </div>
        <div className="second">
          <ul className="DestinationUL">
            <li>
              <a href="/moon">MOON</a>
            </li>
            <li>
              <a href="/">MARS</a>
            </li>
            <li>
              <a href="/europa">EUROPA</a>
            </li>
            <li>
              <a href="/titan">TITAN</a>
            </li>
          </ul>

          <h1 className="mars">{data.destinations[1].name}</h1>
          <p className="mars-text">{data.destinations[1].description}</p>
          <hr className="underline" />
          <div className="Destination-footer">
            <div>
              <p>AVG. DISTANCE</p>
              <h2 className="destination-distance">
                {data.destinations[1].distance}
              </h2>
            </div>
            <div>
              <p>ESTIMATED TRAVEL TIME</p>
              <h2 className="travel-time">{data.destinations[1].travel}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;

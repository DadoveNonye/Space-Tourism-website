import React from "react";
import Europa from "../assets/image-europa.png";
import data from "../data";
import Navbar from "../Components/Navbar";

function Deuropa() {
  return (
    <div className="body destinationBackground">
      <Navbar />
      <div className="destination-body">
        <div className="first">
          <h4>
            <span>01</span> PICK YOUR DESTINATION
          </h4>
          <div className="Mars-image">
            <img width="200px" src={Europa} />
          </div>
        </div>
        <div className="second">
          <ul className="DestinationUL">
            <li>
              <a href="/moon">MOON</a>
            </li>
            <li>
              <a href="/destination">MARS</a>
            </li>
            <li>
              <a id="europa">EUROPA</a>
            </li>
            <li>
              <a href="titan">TITAN</a>
            </li>
          </ul>
          <h1 className="mars">{data.destinations[2].name}</h1>
          <p className="mars-text">{data.destinations[2].description}</p>
          <hr className="underline" />
          <div className="Destination-footer">
            <div>
              <p>AVG. DISTANCE</p>
              <h2 className="destination-distance">
                {data.destinations[2].distance}
              </h2>
            </div>
            <div>
              <p>ESTIMATED TRAVEL TIME</p>
              <h2 className="travel-time">{data.destinations[2].travel}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deuropa;

import React from "react";
import Anousheh from "../assets/image-anousheh-ansari.png";
import Css from "../CSS/Crew.css";
import IndexCss from "../CSS/Index.css";
import Navbar from "./Navbar";

function Crew() {
  return (
    <div className="body crewBackground">
      <Navbar />
      <h4 className="meet">
        <span>02</span> MEET YOUR CREW
      </h4>
      <div className="crew-content">
        <div className="anoushehImage">
          <img className="ansari-img" src={Anousheh} />
        </div>

        <div className="xyz">
          <div className="crewCircle">
            <a className="circle" href=""></a>
            <a className="circle" href=""></a>
            <a className="circle" href=""></a>
            <a className="circle" href=""></a>
          </div>
          <div className="textContent">
            <h4>FLIGHT ENGINEER</h4>
            <h1>ANOUSHEH ANSARI</h1>
            <p>
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;

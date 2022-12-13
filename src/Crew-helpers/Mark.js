import React from "react";
import Mark from "../assets/image-mark-shuttleworth.png";
import Css from "../CSS/Crew.css";
import IndexCss from "../CSS/Index.css";
import Navbar from "../Components/Navbar";
import data from "../data";

function CMark() {
  return (
    <div className="body crewBackground">
      <Navbar />
      <h4 className="meet">
        <span>02</span> MEET YOUR CREW
      </h4>
      <div className="crew-content">
        <div className="anoushehImage">
          <img className="ansari-img" src={Mark} />
        </div>

        <div className="xyz">
          <div className="crewCircle">
            <a className="circle" href="/crew"></a>
            <a className="circle" href="/douglas"></a>
            <a className="circle" href="/mark"></a>
            <a className="circle" href="/victor"></a>
          </div>
          <div className="textContent">
            <h4>{data.crew[1].role}</h4>
            <h1>{data.crew[1].name}</h1>
            <p>{data.crew[1].bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CMark;

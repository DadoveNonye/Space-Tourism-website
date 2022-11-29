import React from "react";
import HomeCss from "../CSS/Home.css";
import IndexCss from "../CSS/Index.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="HomeBody">
      <Navbar />
      <div className="HomeBodyText">
        <h3>SO, YOU WANT TO TRAVEL TO</h3>
        <h1 className="homeheader">SPACE</h1>
        <p>
          Let's face it; if you want to go to the space, you might as well
          genuinely go to the outter space and not hover kind of on the edge of
          it. Well sit back and relax because we will give you a truly out of
          this world experience!
        </p>
        <div className="explore">
          <p>EXPLORE</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

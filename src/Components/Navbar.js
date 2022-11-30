import React from "react";
import logo from "../assets/logo.svg";
import Iconhamburger from "../assets/icon-hamburger.svg";
import IconClose from "..//assets/icon-close.svg";
import NavbarCss from "../CSS/Navbar.css";

function Navbar() {
  const [showBtn, setShowBtn] = React.useState(false);
  function toggleActive() {
    setShowBtn(!showBtn);
  }

  return (
    <div className="Navbar">
      <div className="Navbarimages">
        <img className="logo" src={logo} />
        <div className="buttons" onClick={toggleActive}>
          <img src={showBtn ? IconClose : Iconhamburger} />
        </div>
      </div>

      {showBtn && (
        <ul className="navUl">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/destination">DESTINATION</a>
          </li>
          <li>
            <a href="/crew">CREW</a>
          </li>
          <li>
            <a href="/technology">TECHNOLOGY</a>
          </li>
        </ul>
      )}
    </div>
  );
}

// <Route path="/home" element={<Home />} />
//           <Route path="/crew" element={<Crew />} />
//           <Route path="/destination" element={<Destination />} />
//           <Route path="/technology" element={<Technology />} />

export default Navbar;

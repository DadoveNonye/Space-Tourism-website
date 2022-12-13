import React from "react";
import logo from "../assets/logo.svg";
import Iconhamburger from "../assets/icon-hamburger.svg";
import IconClose from "..//assets/icon-close.svg";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

function Navbar() {
  // const [showBtn, setShowBtn] = React.useState(false);
  // function toggleActive() {
  //   setShowBtn(!showBtn);
  // }
  const [openLinks, setOpenLinks] = React.useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    // <div className="Navbar">
    //   <div className="Navbarimages">
    //     <img className="logo" src={logo} />
    //     <div className="buttons" onClick={toggleActive}>
    //       <img src={showBtn ? IconClose : Iconhamburger} />
    //     </div>
    //   </div>

    //   {showBtn && (
    //     <ul className="navUl">
    //       <li>
    //         <a href="/">HOME</a>
    //       </li>
    //       <li>
    //         <a href="/destination">DESTINATION</a>
    //       </li>
    //       <li>
    //         <a href="/crew">CREW</a>
    //       </li>
    //       <li>
    //         <a href="/technology">TECHNOLOGY</a>
    //       </li>
    //     </ul>
    //   )}

    <div className="navbar">
      <img className="logo" src={logo} />
      {/* <div className="leftSide" id={openLinks ? "close" : "open"}> */}
      {/* <div className="hiddenLinks">
        <Link to="/"> HOME </Link>
        <Link to="/destination"> DESTINATION </Link>
        <Link to="/crew"> CREW </Link>
        <Link to="/technology"> TECHNOLOGY </Link> */}
      {/* </div> */}
      {/* </div> */}
      <div className="rightSide">
        <div className="nav" id={openLinks ? "close" : "open"}>
          <Link to="/"> HOME </Link>
          <Link to="/destination"> DESTINATION </Link>
          <Link to="/crew"> CREW </Link>
          <Link to="/technology"> TECHNOLOGY </Link>
        </div>
        <button onClick={toggleNavbar}>
          <img src={openLinks ? Iconhamburger : IconClose} />
        </button>
      </div>
    </div>
  );
}

// <Route path="/home" element={<Home />} />
//           <Route path="/crew" element={<Crew />} />
//           <Route path="/destination" element={<Destination />} />
//           <Route path="/technology" element={<Technology />} />

export default Navbar;

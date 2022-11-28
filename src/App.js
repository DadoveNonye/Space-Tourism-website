import React from "react";
import Home from "./Components/Home";
import Crew from "./Components/Crew";
import Destination from "./Components/Destination";
import Technology from "./Components/Technology";
import { Routes, Route } from "react-router-dom";
// import Assets from "./assets";
import Data from "./data";

function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </>
    </>
  );
}

export default App;

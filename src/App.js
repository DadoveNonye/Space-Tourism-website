import React from "react";
import Home from "./Components/Home";
import Crew from "./Components/Crew";
import Destination from "./Components/Destination";
import Technology from "./Components/Technology";
import Dmoon from "./Destination-helpers/destination-moon";
import Deuropa from "./Destination-helpers/destination-europa";
import Dtitan from "./Destination-helpers/destination-titan";
import CDouglas from "./Crew-helpers/Douglas";
import Mark from "./Crew-helpers/Mark";
import Victor from "./Crew-helpers/Victor";
import SpaceCapsule from "./Technology-helpers/spaceCapsule";
import Spaceport from "./Technology-helpers/Spaceport";
import { Routes, Route } from "react-router-dom";
// import Assets from "./assets";
import Data from "./data";

function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/moon" element={<Dmoon />} />
          <Route path="/europa" element={<Deuropa />} />
          <Route path="/titan" element={<Dtitan />} />
          <Route path="/douglas" element={<CDouglas />} />
          <Route path="/mark" element={<Mark />} />
          <Route path="/victor" element={<Victor />} />
          <Route path="/spacecapsule" element={<SpaceCapsule />} />
          <Route path="/spaceport" element={<Spaceport />} />
        </Routes>
      </>
    </>
  );
}

export default App;

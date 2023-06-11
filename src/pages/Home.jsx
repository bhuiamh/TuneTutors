import React from "react";
import Navbar from "./shared/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-20 text-8xl text-orange-500 font-bold">
        Hello TuneTutors
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "./shared/Navbar";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || TuneTutors</title>
      </Helmet>

      <div className="pt-20 text-8xl text-orange-500 font-bold">
        Hello TuneTutors
      </div>
    </div>
  );
};

export default Home;

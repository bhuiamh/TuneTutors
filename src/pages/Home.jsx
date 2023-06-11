import React from "react";
import Navbar from "./shared/Navbar";
import { Helmet } from "react-helmet-async";
import AboutPage from "./AboutPage";
import FAQPage from "./FAQPage";
import ContactUs from "./ContactUs";
import CallNowPage from "./CallNowPage";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || TuneTutors</title>
      </Helmet>

      <AboutPage></AboutPage>
      <FAQPage></FAQPage>
      <ContactUs></ContactUs>
      <CallNowPage></CallNowPage>
    </div>
  );
};

export default Home;

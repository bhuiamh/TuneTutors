import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import banner from "../../src/assets/banner.png";
import "./Main.css";
import Slider from "../pages/Slider";
import ClassCategory from "../pages/ClassCategory";
import Instructors from "../pages/Instructors";
import Map from "../pages/Map";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="pt-24 text-center">
          <Slider></Slider>
          <ClassCategory></ClassCategory>
          <Instructors></Instructors>
        </div>
        <div className="flex flex-col md:flex-row pt-24">
          <div className="w-full md:w-1/2 md:sticky md:top-0">
            <img src={banner} alt="" />
          </div>
          <div className="w-full md:w-1/2 md:h-screen md:overflow-y-auto hide-scrollbar">
            <div className="h-screen md:max-h-screen">
              <div className="h-full overflow-y-auto">
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Map></Map>
      <Footer></Footer>
    </div>
  );
};

export default Main;

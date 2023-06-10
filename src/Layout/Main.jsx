import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const Main = () => {
  //   const location = useLocation();
  //   const noHeaderFooter =
  //     location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;

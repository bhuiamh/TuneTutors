import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import InstructorPage from "../pages/InstructorPage";
import Classes from "../pages/Classes";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import AcquiredClass from "../pages/AcquiredClass";
import Profile from "../pages/Profile";
import Payment from "../pages/Payment";
import EnrolledClass from "../pages/EnrolledClass";
import PaymentHistory from "../pages/PaymentHistory";
import AllUsers from "../pages/AllUsers";
import ManageClasses from "../pages/ManageClasses";
import AddItem from "../pages/AddItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      { path: "profile", element: <Profile></Profile> },
      {
        path: "changePassword",
        element: <ChangePasswordPage></ChangePasswordPage>,
      },
      {
        path: "acquiredClass",
        element: <AcquiredClass></AcquiredClass>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "enrolled",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "enrolled",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path: "menageUser",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "menageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "addItem",
        element: <AddItem></AddItem>,
      },
    ],
  },
  {
    path: "login",
    element: (
      <div>
        <Navbar></Navbar>
        <div className="pt-24">
          <Login></Login>
        </div>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "signup",
    element: (
      <div>
        <Navbar></Navbar>
        <div className="pt-24">
          <SignUp></SignUp>
        </div>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "instructors",
    element: (
      <div>
        <Navbar></Navbar>
        <div className="pt-24">
          <InstructorPage></InstructorPage>
        </div>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "classes",
    element: (
      <div>
        <Navbar></Navbar>
        <div className="pt-24">
          <Classes></Classes>
        </div>
        <Footer></Footer>
      </div>
    ),
  },
]);

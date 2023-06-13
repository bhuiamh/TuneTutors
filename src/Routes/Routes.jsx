import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import InstructorPage from "../pages/InstructorPage";

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
      //     { path: "menu", element: <Menu></Menu> },

      //     {
      //       path: "order/:category",
      //       element: <Order></Order>,
      //     },
      //     {
      //       path: "secret",
      //       element: (
      //         <PrivateRoute>
      //           <Secret></Secret>
      //         </PrivateRoute>
      //       ),
      //     },
      //     {
      //       path: "profile",
      //       element: (
      //         <PrivateRoute>
      //           <ProfileView></ProfileView>
      //         </PrivateRoute>
      //       ),
      //     },
    ],
  },

  // {
  //   path: "dashboard",
  //   element: (
  //     <PrivateRoute>
  //       <Dashboard></Dashboard>
  //     </PrivateRoute>
  //   ),
  //   children: [
  //     {
  //       path: "userhome",
  //       element: <UserHome></UserHome>,
  //     },
  //     {
  //       path: "mycart",
  //       element: <MyCart></MyCart>,
  //     },
  //     {
  //       path: "mycart/payment",
  //       element: <Payment></Payment>,
  //     },
  //     {
  //       path: "allUser",
  //       element: (
  //         <AdminRoute>
  //           <AllUsers></AllUsers>
  //         </AdminRoute>
  //       ),
  //     },
  //     {
  //       path: "adminhome",
  //       element: (
  //         <AdminRoute>
  //           <AdminHome></AdminHome>
  //         </AdminRoute>
  //       ),
  //     },
  //     {
  //       path: "addItem",
  //       element: (
  //         <AdminRoute>
  //           <AddItem></AddItem>
  //         </AdminRoute>
  //       ),
  //     },
  //     {
  //       path: "manageItems",
  //       element: (
  //         <AdminRoute>
  //           <ManageItems></ManageItems>
  //         </AdminRoute>
  //       ),
  //     },
  //   ],
  // },
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
]);

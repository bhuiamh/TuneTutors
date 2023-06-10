import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home";
import Main from "../Layout/Main";

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
      //     { path: "login", element: <Login></Login> },
      //     { path: "signup", element: <SignUp></SignUp> },
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
      //   ],
      // },
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
    ],
  },
]);

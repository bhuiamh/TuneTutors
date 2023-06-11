import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.png";
import useAuth from "../../providers/useAuth";
// import useCart from "../../Hooks/useCart";
// import useAuth from "../../Hooks/useAuth";
// import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
  const isAdmin = false;
  const { user, logOut } = useAuth();
  // const [cart] = useCart();
  // const [isAdmin] = useAdmin();

  const handleLogOut = (event) => {
    event.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "You have successfully signed out",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Something went wrong",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          });
      }
    });
  };

  const navOptions = (
    <>
      <li className="font-bold text-base md:text-xl text-orange-500">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold text-base md:text-xl text-orange-500">
        <Link to="/instructors">Instructors</Link>
      </li>
      <li className="font-bold text-base md:text-xl text-orange-500">
        <Link to="/classes">Classes</Link>
      </li>
      {user ? (
        <li className="font-bold text-base md:text-xl text-orange-500">
          <Link to="dashboard">Dashboard</Link>
        </li>
      ) : (
        <></>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 rounded mt-2 text-white max-w-screen-xl bg-black/70">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="flex items-center pl-8">
            <img className="h-10 md:h-16" src={logo} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end pr-8">
          {user && !isAdmin ? (
            <Link to="/dashboard">
              <button className="btn btn-outline border border-orange-500 hover:bg-orange-500 mx-3">
                <div className="badge text-orange-500">Only for User</div>
              </button>
            </Link>
          ) : (
            <></>
          )}
          {!user ? (
            <p className="font-bold decoration-none md:text-xl text-orange-500">
              <Link to="/login">Login</Link>
            </p>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-orange-500 rounded-box w-52"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <small className="pl-2 text-xs">{user.displayName}</small>
                  </Link>
                </li>
                <li>
                  <Link
                    to={isAdmin ? "dashboard/adminhome" : "dashboard/userhome"}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import useAuth from "../providers/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logOut } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
            navigate("/");
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
  const userItem = (
    <>
      <Link
        onClick={toggleMenu}
        to="acquiredClass"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        My Acquired Classes
      </Link>
      <Link
        onClick={toggleMenu}
        to="enrolled"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Enrolled Class
      </Link>
      <Link
        onClick={toggleMenu}
        to="paymentHistory"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Payment History
      </Link>
      <Link
        onClick={toggleMenu}
        to="/"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Home
      </Link>
      <Link
        onClick={toggleMenu}
        to="profile"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        My Profile
      </Link>
      <Link
        onClick={toggleMenu}
        to="changePassword"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Change Password
      </Link>
      <Link
        onClick={handleLogOut}
        to="/"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Logout
      </Link>
    </>
  );
  const instructorItem = (
    <>
      <Link
        onClick={toggleMenu}
        to="addItem"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Add a Class
      </Link>

      <Link
        onClick={toggleMenu}
        to="/"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Home
      </Link>
      <Link
        onClick={toggleMenu}
        to="profile"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        My Profile
      </Link>
      <Link
        onClick={toggleMenu}
        to="changePassword"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Change Password
      </Link>
      <Link
        onClick={handleLogOut}
        to="/"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Logout
      </Link>
    </>
  );
  const adminItem = (
    <>
      <Link
        onClick={toggleMenu}
        to="menageUser"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Menage User
      </Link>
      <Link
        onClick={toggleMenu}
        to="menageClasses"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Menage Class
      </Link>

      <Link
        onClick={toggleMenu}
        to="/"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Home
      </Link>
      <Link
        onClick={toggleMenu}
        to="profile"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        My Profile
      </Link>
      <Link
        onClick={toggleMenu}
        to="changePassword"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Change Password
      </Link>
      <Link
        onClick={handleLogOut}
        to="/"
        className="border-transparent text-orange-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium"
      >
        Logout
      </Link>
    </>
  );
  return (
    <div className="min-h-screen pt-8">
      <Helmet>
        <title>Dashboard || TuneTutors</title>
      </Helmet>
      {/* Dashboard Menu */}
      {!isAdminLoading && (
        <nav className="bg-white shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex">
                <div className="sm:hidden">
                  {/* Mobile Menu Button */}
                  <button
                    type="button"
                    className="text-gray-500 text-xl hover:text-gray-700 focus:outline-none focus:text-gray-700"
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                  >
                    <AiOutlineMenu></AiOutlineMenu>
                  </button>
                </div>
                <div className="hidden sm:flex sm:space-x-8">
                  {}
                  {isAdmin ? adminItem : userItem}
                  {isInstructor && instructorItem}
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="sm:hidden mx-3">
              <div className="flex flex-col items-center mt-2 ">
                {/* Dashboard Menu Items */}
                {isAdmin ? adminItem : userItem}

                {isInstructor && instructorItem}
              </div>
            </div>
          )}
        </nav>
      )}

      {/* Dashboard Content */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

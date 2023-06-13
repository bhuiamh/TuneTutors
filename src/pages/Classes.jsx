import React from "react";
import useClass from "../hooks/useClass";
import useAuth from "../providers/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Classes = () => {
  const [classes] = useClass();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleEnroll = (classItem) => {
    if (user && user.displayName) {
      console.log("Item enrolled");
    } else {
      Swal.fire({
        title: "Please Login to Order the Food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="mt-8">
      <h1 className="text-4xl font-bold text-orange-500 text-center mb-4">
        Level Up Your Skills
      </h1>
      <h1 className="text-2xl font-bold text-slate-900 text-center mb-8">
        Our course will help you take your skills to the next level.
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {classes.map((classItem) => (
          <div
            key={classItem._id}
            className="hero rounded-2xl"
            style={{
              borderRadius: "7%",
              backgroundImage: `url(${classItem.cover_picture})`,
            }}
          >
            <div
              className={`hero-overlay ${
                classItem.available_seats === 0
                  ? "bg-red-500 bg-opacity-100"
                  : "bg-opacity-60"
              }  rounded-2xl`}
            ></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-1 text-orange-500 text-5xl font-bold">
                  {classItem.title}
                </h1>
                <h1 className="mb-5 text-2xl font-bold">
                  by {classItem.instructor_name}
                </h1>

                <div className="flex mb-3">
                  <ul className="text-end">
                    <li className="text-xl font-semibold text-white">
                      Available Seats :
                    </li>
                    <li className="text-xl font-semibold text-white">
                      Student Enrolled :{" "}
                    </li>
                    <li className="text-xl font-semibold text-white">
                      Course Coast :{" "}
                    </li>
                  </ul>
                  <ul className="text-start">
                    <li className="text-xl font-semibold text-orange-500 ml-1">
                      {classItem.available_seats}
                    </li>
                    <li className="text-xl font-semibold text-orange-500 ml-1">
                      {classItem.students_enrolled}
                    </li>
                    <li className="text-xl font-semibold text-orange-500 ml-1">
                      {classItem.price}
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleEnroll(classItem)}
                  disabled={classItem.available_seats === 0 ? true : false}
                  className="btn btn-outline text-white hover:bg-orange-500"
                >
                  Enroll
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;

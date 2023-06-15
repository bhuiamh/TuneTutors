import React, { useState } from "react";
import useClass from "../hooks/useClass";
import useAuth from "../providers/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Classes = () => {
  const [classes] = useClass();
  const [enrolledItems, setEnrolledItems] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleEnroll = (classItem) => {
    if (enrolledItems.includes(classItem._id)) {
      return Swal.fire({
        icon: "error",
        title: "You have already Acquire this class",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      if (user && user.email) {
        const enrolledClass = {
          userEmail: user.email,
          enrolledId: classItem._id,
          title: classItem.title,
          cover_picture: classItem.cover_picture,
          classItem: classItem.instructor_name,
          price: classItem.price,
        };
        fetch("https://tunetutor-server-bhuiamh.vercel.app/enrolledClass", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(enrolledClass),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              // refetch();
              Swal.fire({
                icon: "success",
                title: "Item added to Acquire List Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              setEnrolledItems([...enrolledItems, classItem._id]);
            } else {
              Swal.fire({
                icon: "error",
                title: "You Have Already Acquire This Class",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
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
                  Acquire
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

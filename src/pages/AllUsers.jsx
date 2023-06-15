import React from "react";
import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "react-query";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://tunetutor-server-bhuiamh.vercel.app/allusers/${user._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();

              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    fetch(
      `https://tunetutor-server-bhuiamh.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user.name} is Selected for Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(
      `https://tunetutor-server-bhuiamh.vercel.app/users/instructors/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user.name} is Selected for Instructor`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeUser = (user) => {
    fetch(
      `https://tunetutor-server-bhuiamh.vercel.app/users/makeuser/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user.name} is Selected for User`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl text-center text-black font-bold mb-4">
        Menage All Users
      </h1>
      <div className="w-full flex justify-center items-center mt-8">
        <div>
          <Helmet>
            <title> Menage Users || TuneTutors</title>
          </Helmet>
          <div className="flex justify-between p-4">
            <h2 className="text-xl font-bold text-black">
              Total User: <span className="text-black">{users.length}</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="table ">
              <thead>
                <tr>
                  <th>Serial</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Action</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.email ? user.email : "Null"}</td>
                    <td>
                      {user.role === "admin" && <div className=""></div>}
                      {user.role === "user" && (
                        <div className="flex">
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="text-white text-center p-1 font-semibold rounded bg-orange-500 mr-2"
                          >
                            Make Admin
                          </button>
                          <button
                            onClick={() => handleMakeInstructor(user)}
                            className="text-white text-center p-1 font-semibold rounded bg-orange-500"
                          >
                            Make Instructor
                          </button>
                        </div>
                      )}
                      {user.role === "instructor" && (
                        <div className="flex">
                          <button
                            onClick={() => handleMakeUser(user)}
                            className="text-white text-center p-1 font-semibold rounded bg-orange-500 mr-2"
                          >
                            Make User
                          </button>
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="text-white text-center p-1 font-semibold rounded bg-orange-500"
                          >
                            Make Admin
                          </button>
                        </div>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(user)}
                        className="btn btn-outline bg-red-600 text-white"
                      >
                        <FaRegTrashAlt></FaRegTrashAlt>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

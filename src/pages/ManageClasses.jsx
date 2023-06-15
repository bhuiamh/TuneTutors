import React from "react";
import { Helmet } from "react-helmet-async";
import { FaEdit, FaRegTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useClass from "../hooks/useClass";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageClasses = () => {
  const [classes, , refetch] = useClass();
  const [axiosSecure] = useAxiosSecure();
  const handleDelete = (item) => {
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
        axiosSecure.delete(`classes/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div>
        <Helmet>
          <title>Manage Class || TuneTutors</title>
        </Helmet>

        <h1 className="text-3xl text-center text-black font-bold mb-4">
          Menage All Classes
        </h1>

        <div className="overflow-x-auto">
          <table className="table ">
            <thead>
              <tr>
                <th>#</th>
                <th className="hidden sm:table-cell">Photo</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td className="hidden sm:table-cell">
                    <div className="avatar">
                      <div className="w-16 rounded">
                        <img
                          src={item.cover_picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td className="flex justify-center ">
                    <button className="btn btn-outline mr-2 bg-orange-600 text-white">
                      <FaEdit></FaEdit>
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-outline ml-2 bg-red-600 text-white"
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
  );
};

export default ManageClasses;

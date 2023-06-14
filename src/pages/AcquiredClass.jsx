import React from "react";
import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAcquiredClass from "../hooks/useAcquiredClass";

const AcquiredClass = () => {
  const [acquiredClass, refetch] = useAcquiredClass();
  console.log(acquiredClass);

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
        fetch(`http://localhost:5000/acquired/${item._id}`, {
          method: "DELETE",
        })
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

  const sum = acquiredClass.reduce((sum, item) => item.price + sum, 0);
  const total = sum.toFixed(2);

  return (
    <div className="w-full flex justify-center items-center mt-8">
      {acquiredClass.length !== 0 ? (
        <div>
          <div className=" py-4 px-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-black mr-3">
              Acquired:{" "}
              <span className="text-slate-700">{acquiredClass.length}</span>
            </h2>
            <h2 className="text-2xl font-bold text-black mr-3">
              Cost: <span className="text-slate-700">${total}</span>
            </h2>
            <Link to="/dashboard/payment">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 focus:outline-none">
                Pay
              </button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="py-2">No.</th>
                  <th className="py-2">Photo</th>
                  <th className="py-2">Class Name</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {acquiredClass.map((classItem, index) => (
                  <tr key={classItem._id}>
                    <td className="py-2">
                      <label>{index + 1}</label>
                    </td>
                    <td className="py-2">
                      <div className="flex items-center">
                        <div className="w-12 h-12 overflow-hidden rounded-full">
                          <img
                            className="object-cover w-full h-full"
                            src={classItem.cover_picture}
                            alt="Class Avatar"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-2">{classItem.title}</td>
                    <td className="py-2">${classItem.price}</td>
                    <td className="py-2">
                      <button
                        onClick={() => handleDelete(classItem)}
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
                      >
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className=" py-4 px-6 flex items-center justify-between">
          <h1>You do not have any Acquired Class </h1>
          <Link to="/classes">
            <button className="ml-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 focus:outline-none">
              All Classes
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AcquiredClass;

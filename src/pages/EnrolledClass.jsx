import React from "react";
import { Helmet } from "react-helmet-async";
import useEnrolled from "../hooks/useEnrolled";
import { Link } from "react-router-dom";

const EnrolledClass = () => {
  const [enrolled, refetch] = useEnrolled();

  return (
    <div className="text-center place-items-center grid">
      <Helmet>
        <title> My Class || TuneTutors</title>
      </Helmet>
      <h1 className="text-3xl text-center text-black font-bold mb-4">
        My Enrolled Class
      </h1>
      <div className="w-full grid grid-cols-1 max-w-xs text-center place-items-center mt-8">
        {enrolled.map((classItem, index) => (
          <div key={classItem._id}>
            <h1 className="text-orange-500 text-2xl text-center my-3">
              Coast of item:
              <span className="font-semibold">${classItem.amount}</span>
            </h1>

            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="py-2">No.</th>
                    <th className="py-2">Name</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {classItem.itemNames.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2">
                        <label>{index + 1}</label>
                      </td>

                      <td className="py-2">{item}</td>
                      <td className="py-2">Service Pending</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledClass;

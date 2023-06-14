import React from "react";
import { Helmet } from "react-helmet-async";
import useEnrolled from "../hooks/useEnrolled";
import { Link } from "react-router-dom";

const EnrolledClass = () => {
  const [enrolled, refetch] = useEnrolled();
  console.log(enrolled, "enrolled");

  return (
    <div>
      <Helmet>
        <title> My Class || TuneTutors</title>
      </Helmet>
      <div className="w-full flex justify-center items-center mt-8">
        {enrolled.map((classItem, index) => (
          <div key={classItem._id}>
            <div className="overflow-x-auto">
              <h1 className="text-3xl text-black font-bold mb-4">
                My Enrolled Class
              </h1>
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

import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import useEnrolled from "../hooks/useEnrolled";
import { FaCopy } from "react-icons/fa";
const PaymentHistory = () => {
  const [enrolled, refetch] = useEnrolled();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (classItem) => {
    navigator.clipboard.writeText(classItem.transaction);
    setIsCopied(true);

    // Reset the 'isCopied' state after a certain duration
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <div className="text-center place-items-center grid">
      <Helmet>
        <title> History || TuneTutors</title>
      </Helmet>
      <h1 className="text-3xl text-center text-black font-bold mb-4">
        Payment History
      </h1>
      <div>
        <div className="overflow-x-auto max-w-md">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="py-2">No.</th>
                <th className="py-2">Tnx Id</th>
                <th className="py-2">Date</th>
                <th className="py-2">Amount</th>
              </tr>
            </thead>
            {enrolled.map((classItem, index) => (
              <tbody key={classItem._id}>
                <tr>
                  <td className="py-2">
                    <label>{index + 1}</label>
                  </td>

                  <td className="py-2">
                    <div className="flex items-center">
                      <span className="text-sm">
                        {classItem.transaction.length > 5
                          ? `${classItem.transaction.slice(0, 8)}...`
                          : classItem.transaction}
                      </span>
                      <button
                        onClick={() => handleCopy(classItem.transaction)}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                      >
                        <FaCopy />
                      </button>
                    </div>
                  </td>

                  <td className="py-2">{classItem.date}</td>
                  <td className="py-2">{classItem.amount}</td>
                </tr>
              </tbody>
            ))}
          </table>
          {isCopied && (
            <p className="text-xs mt-4 text-green-500 mt-1">
              Transaction copied!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;

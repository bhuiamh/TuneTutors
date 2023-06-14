import React, { useState } from "react";
import Swal from "sweetalert2";

const ChangePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Change Password",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your password has been changed.", "success");
      }
    });
    e.target.reset();
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordMatch(true);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-6">Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="currentPassword"
              className="block text-gray-700 font-medium mb-2"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-blue-500"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block text-gray-700 font-medium mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-blue-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className={`border ${
                passwordMatch ? "border-gray-300" : "border-red-500"
              } px-3 py-2 rounded-md w-full focus:outline-none focus:ring-blue-500`}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordMatch(true);
              }}
              required
            />
            {!passwordMatch && (
              <p className="text-red-500 text-sm mt-1">
                Passwords do not match.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-900 focus:outline-none"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;

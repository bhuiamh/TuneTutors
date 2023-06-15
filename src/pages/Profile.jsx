import { useState } from "react";
import { MdEdit } from "react-icons/md";
import useUser from "../hooks/useUser";
import Swal from "sweetalert2";

const Profile = () => {
  const [profile, refetch] = useUser();
  const [user, setUser] = useState({
    photoURL: "",
    name: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    address: "",
  });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditMode(false);
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: `Profile Update Successful`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      {profile.map((item) => (
        <div key={item._id}>
          <div className="text-center text-2xl font-bold mb-6">
            User Information
          </div>
          <div className="flex items-center mb-4">
            <div className="w-36 h-36  rounded mr-4">
              <img src={item.photoURL} alt="" />
            </div>
            <div>
              <h1 className="text-xl font-bold">{item.name || "Not set"}</h1>
              <p className="text-gray-600">{item.email || "Not set"}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="pt-8">
              <p className="font-semibold">Phone Number:</p>
              <p>{item.phoneNumber || "Not set"}</p>
            </div>
            <div>
              <p className="font-semibold">Date of Birth:</p>
              <p>{item.dateOfBirth || "Not set"}</p>
            </div>
            <div>
              <p className="font-semibold">Gender:</p>
              <p>{item.gender || "Not set"}</p>
            </div>
            <div>
              <p className="font-semibold">Address:</p>
              <p>{item.address || "Not set"}</p>
            </div>
          </div>
          {editMode ? (
            <div>
              <input
                type="text"
                name="name"
                placeholder={item.name}
                onChange={handleChange}
                className="mb-2 w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="email"
                placeholder={item.email}
                onChange={handleChange}
                className="mb-2 w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder={item.phoneNumber}
                onChange={handleChange}
                className="mb-2 w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="dateOfBirth"
                placeholder={item.dateOfBirth}
                onChange={handleChange}
                className="mb-2 w-full p-2 border border-gray-300 rounded"
              />
              <select
                name="gender"
                onChange={handleChange}
                className="mb-2 w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input
                type="text"
                name="address"
                placeholder={item.address}
                onChange={handleChange}
                className="mb-2 w-full p-2 border border-gray-300 rounded"
              />
            </div>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              <MdEdit className="inline-block mr-2" />
              Edit
            </button>
          )}
          {editMode && (
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Profile;

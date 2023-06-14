import { useState } from "react";
import { MdEdit } from "react-icons/md";

const Profile = () => {
  const [user, setUser] = useState({
    photo: "",
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
    console.log(user);
    setEditMode(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <div className="text-center text-2xl font-bold mb-6">
        User Information
      </div>
      <div className="flex items-center mb-4">
        <div className="w-36 h-36 bg-red-200 rounded mr-4" />
        <div>
          <h1 className="text-xl font-bold">{user.name || "Not set"}</h1>
          <p className="text-gray-600">{user.email || "Not set"}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="font-semibold">Phone Number:</p>
          <p>{user.phoneNumber || "Not set"}</p>
        </div>
        <div>
          <p className="font-semibold">Date of Birth:</p>
          <p>{user.dateOfBirth || "Not set"}</p>
        </div>
        <div>
          <p className="font-semibold">Gender:</p>
          <p>{user.gender || "Not set"}</p>
        </div>
        <div>
          <p className="font-semibold">Address:</p>
          <p>{user.address || "Not set"}</p>
        </div>
      </div>
      {editMode ? (
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            className="mb-2 w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="mb-2 w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={user.phoneNumber}
            onChange={handleChange}
            className="mb-2 w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="dateOfBirth"
            placeholder="Date of Birth"
            value={user.dateOfBirth}
            onChange={handleChange}
            className="mb-2 w-full p-2 border border-gray-300 rounded"
          />
          <select
            name="gender"
            value={user.gender}
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
            placeholder="Address"
            value={user.address}
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
  );
};

export default Profile;

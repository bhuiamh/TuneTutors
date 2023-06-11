import React from "react";
import { FiMail, FiMessageCircle } from "react-icons/fi";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container px-4 mx-auto">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl text-center font-bold text-orange-500 mb-4">
          Contact Us
        </h1>
        <h2 className="text-lg text-center mb-8">
          We had love to hear from you
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="subject" className="block text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border  focus:outline-none focus:border-orange-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold  py-2 px-4 rounded focus:outline-none"
          >
            Get in Touch
          </button>
        </form>
      </div>
      <div className="bg-black rounded my-12 h-1 w-full"></div>
    </div>
  );
};

export default ContactUs;

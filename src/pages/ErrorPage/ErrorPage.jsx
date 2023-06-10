import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex-container">
      <div className="text-center">
        <h1 className="">
          <span className="fade-in" id="digit1">
            4
          </span>
          <span className="fade-in" id="digit2">
            0
          </span>
          <span className="fade-in" id="digit3">
            4
          </span>
        </h1>
        <h3 className="fadeIn">PAGE NOT FOUND</h3>
        <button type="button" name="button">
          <Link id="link-button" to="/">
            Back to Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

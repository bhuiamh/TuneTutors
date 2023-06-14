import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../providers/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => prevValue + 1);
    }, 10);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  if (isLoading || loading) {
    let progressColor;

    if (value >= 0 && value < 25) {
      progressColor = "text-red-500";
    } else if (value >= 25 && value < 50) {
      progressColor = "text-blue-500";
    } else if (value >= 50 && value < 75) {
      progressColor = "text-green-500";
    } else if (value >= 75 && value < 100) {
      progressColor = "text-yellow-500";
    } else {
      progressColor = "text-gray-500";
    }

    return (
      <div
        className="flex items-center justify-center"
        style={{ height: "100vh" }}
      >
        <div
          className={`radial-progress ${progressColor} text-2xl font-bol`}
          style={{
            "--value": `${value}`,
            "--size": "12rem",
            "--thickness": "2rem",
          }}
        >
          {value}%
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ form: location }} replace />;
};

export default PrivateRoute;

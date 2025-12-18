import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6 text-center">
      <h1 className="text-9xl font-extrabold text-blue-500 mb-4 animate-bounce">
        404
      </h1>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for does not exist. It might have been removed,
        renamed, or is temporarily unavailable.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;

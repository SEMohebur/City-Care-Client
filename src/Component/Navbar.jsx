import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Navbar = () => {
  const { user, LogOutUser } = useContext(AuthContext) || {};
  const [openProfile, setOpenProfile] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const menuRef = useRef(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // console.log(user);

  //get singleUser Info
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/user?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setRole(data.role))
        .catch((err) => console.log(err.message));
    }
  }, [user?.email]);
  console.log(role);

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="text-2xl font-semibold text-gray-800">
              CityCare
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link to="/issues" className="text-gray-600 hover:text-blue-600">
              All Issues
            </Link>

            <Link to="/extra-2" className="text-gray-600 hover:text-blue-600">
              Extra Page 2
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setOpenProfile((prev) => !prev)}
                className="flex items-center focus:outline-none"
              >
                <img
                  src={
                    user?.photoURL ||
                    "https://images.unsplash.com/photo-1590030535521-e69873a44ee0?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVtbXklMjB1c2VyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
                  }
                  alt="User"
                  className="w-10 h-10 rounded-full border shadow-sm"
                />
              </button>

              {openProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                  {user?.email ? (
                    <>
                      <div className="px-4 py-2 text-sm font-medium text-gray-800">
                        {user?.displayName || "User"}
                      </div>
                      {role && (
                        <Link
                          to={`/${role}DeshBoard`}
                          onClick={() => setOpenProfile(false)}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                        >
                          Dashboard
                        </Link>
                      )}
                      <button
                        onClick={LogOutUser}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={() => setOpenProfile(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/register"
                        onClick={() => setOpenProfile(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={() => setOpenMobile(!openMobile)}
              className="md:hidden block focus:outline-none"
            >
              {openMobile ? (
                <svg className="h-8 w-8" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {openMobile && (
          <div className="md:hidden mt-3 pb-4 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link
              to="/issues"
              className="block text-gray-700 hover:text-blue-600"
            >
              All Issues
            </Link>
            <Link
              to="/createIssue"
              className="text-gray-600 hover:text-blue-600"
            >
              Create Issue
            </Link>
            <Link
              to="/extra-2"
              className="block text-gray-700 hover:text-blue-600"
            >
              Extra Page 2
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo_small } from "../util/images"; // adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-4 md:px-6 py-4 flex items-center justify-between">
      {/* Logo */}

      <div className="flex items-center">
        <span className="ml-2 text-xl font-bold hidden md:inline">OliveBranch</span>
      </div>

      {/* Hamburger button for mobile */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Links */}
      <div
        className={`flex flex-col md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4 ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        <Link className="hover:text-yellow-400" to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link className="hover:text-yellow-400" to="/products" onClick={() => setIsOpen(false)}>Products</Link>
        <Link className="hover:text-yellow-400" to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link className="hover:text-yellow-400" to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
        <Link className="hover:text-yellow-400" to="/videos" onClick={() => setIsOpen(false)}>Videos</Link>
        <Link
          to="/contact"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 hover:text-yellow-300 transition"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">CoreyBeaverMusic</div>
      <div className="space-x-4">
        <Link className="hover:text-yellow-400" to="/">Home</Link>
        <Link className="hover:text-yellow-400" to="/products">Products</Link>
        <Link className="hover:text-yellow-400" to="/about">About</Link>
  {/* Contact as button */}
        <Link
          to="/contact"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-semibold"
        >
          Contact
        </Link>      </div>
    </nav>
  );
};

export default Navbar;

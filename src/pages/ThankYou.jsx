// src/pages/ThankYou.jsx
import React from "react";
import { Link } from "react-router-dom"; // if using react-router for navigation

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6">Thank You!</h1>
      <p className="text-lg md:text-xl mb-6 max-w-xl">
        Your donation to OliveBranch Media is greatly appreciated. 
        Your support helps us create faith-centered music, media, and digital resources for the Oneness Pentecostal community.
      </p>
      <p className="text-base md:text-lg mb-6">
        We pray that God blesses you abundantly for your generosity.
      </p>
      <Link
        to="/"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default ThankYou;

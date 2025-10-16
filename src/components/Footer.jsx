// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Branding */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold">OliveBranch</h2>
          <p className="text-gray-400 text-sm">Faith-Driven Music & Digital Services</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.youtube.com/@CoreyBeaverMusic-dl1en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            YouTube
          </a>
          <a
            href="https://www.instagram.com/corey.beaver.music/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            Instagram
          </a>
          <a
            href="#/legal"
            className="hover:text-indigo-500 transition"
          >
            Legal & Privacy
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} OliveBranch. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// src/pages/Contact.jsx
import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="mb-6">
          I’d love to hear from you! Whether it’s about music, collaborations, or questions about my work, feel free to reach out.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.youtube.com/@CoreyBeaverMusic-dl1en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            YouTube
          </a>

          <a
            href="https://www.instagram.com/corey.beaver.music/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition"
          >
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

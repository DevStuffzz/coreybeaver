// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Corey Beaver</h1>
        <p className="text-xl max-w-xl mx-auto">
          Apostolic Pentecostal Producer & Musician
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-4xl w-full px-6 py-16 flex flex-col md:flex-row items-center md:items-start md:gap-12">
     {/* Image */}
<div className="w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-0 rounded-full overflow-hidden shadow-lg">
  <img
    src={`${import.meta.env.BASE_URL}assets/corey.jpg`} // works locally and on GitHub Pages
    alt="Corey Beaver"
    className="w-full h-full object-cover"
  />
</div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            Hi, I’m <strong>Corey Beaver</strong>, an Apostolic Pentecostal producer based in Detroit, MI.  
            I mainly play keys, including piano, organ, and auxiliary instruments, but I also play guitar and bass.
          </p>
          <p className="mb-4">
            I am the main keys player for <strong>Ascend Church</strong> in Troy, MI, and I’ve studied music for over 8 years.  
            My passion lies in creating immersive musical experiences for worship and production.
          </p>
          <p className="text-indigo-600 font-semibold">
            Let’s make music that moves people.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 bg-gray-100 text-center">
        <h3 className="text-2xl font-bold mb-4">Explore My Work</h3>
        <p className="mb-6">Check out my multitracks, chord charts, and more coming soon.</p>
        <a
          href="/products"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          View Products
        </a>
      </section>
    </div>
  );
}

// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Corey Beaver</h1>
        <p className="text-xl max-w-xl mx-auto">
          Apostolic Pentecostal Worship Producer, Musician, and Apologist
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-5xl w-full px-6 py-16 flex flex-col md:flex-row items-center md:items-start md:gap-12">
        {/* Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-0 rounded-full overflow-hidden shadow-lg">
          <img
            src="/assets/corey.jpg" // replace with your photo
            alt="Corey Beaver"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>

          <p className="mb-4">
            Hi, I’m <strong>Corey Beaver</strong>, an Apostolic Pentecostal producer and worship musician based in Detroit, MI. I mainly play keys, including piano, organ, and auxiliary instruments, but I also play guitar and bass. My musical journey began as a classically trained trumpet player, performing in marching bands, symphonic bands, and jazz ensembles, which gave me a strong foundation in music theory and performance.
          </p>

          <p className="mb-4">
            I am the main keys player for <strong>Ascend Church</strong> in Troy, MI, and have studied music for over 8 years. My production work is dedicated strictly to worship music across all styles, with a particular passion for Southern Gospel.
          </p>

          <p className="mb-4">
            My musical path was shaped by influential mentors, including <strong>Josh Kiser</strong>, who invited me to join the worship team at Ascend Church, <strong>Payton West</strong>, who gave me my first piano lesson, <strong>Dr Lindel Anderson</strong>, the former dean of Worship Studies at Indiana Bible College, and my pastor <strong>Joumeel Mclarine</strong>. My theological studies were inspired by <strong>Bobby Killmon</strong>, my Biblical Studies Dean at Indiana Bible College,  <strong>TJ Elkins</strong>, a minister at Ascend Church, and of course, my pastor. My parents,  <strong>John Beaver</strong> and  <strong>Crystal Beaver</strong> are the most important roles in my journey, having raised me in Apostolic Faith my entire life.
          </p>

          <p className="mb-4">
            Beyond music, I am an apologist working on my book <strong>"Defending Oneness"</strong>. My study of apologetics and theology is deeply rooted in my faith and mentorship, aiming to provide clarity and defense of the Oneness Pentecostal doctrine through both teaching and writing.
          </p>

          <p className="text-indigo-600 font-semibold">
            My mission is to create worship music that moves people spiritually and to provide thoughtful, reasoned guidance in the study of faith.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 bg-gray-100 text-center">
        <h3 className="text-2xl font-bold mb-4">Explore My Work</h3>
        <p className="mb-6">Check out my multitracks, chord charts, and other resources.</p>
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

// src/pages/About.jsx
import React from "react";

// Team Member Card Component
const TeamMemberCard = ({ name, role, bio, image }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center w-full max-w-xs">
    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
      <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <h4 className="text-xl md:text-2xl font-semibold mb-2">{name}</h4>
    <p className="text-indigo-600 font-medium mb-2">{role}</p>
    <p className="text-sm md:text-base text-gray-700">{bio}</p>
  </div>
);

export default function About() {
  // Add team members here
  const teamMembers = [
    {
      name: "Corey Beaver",
      role: "Founder & Apostolic Pentecostal Worship Producer",
      bio: "Hi, I’m Corey Beaver, an Apostolic Pentecostal producer and worship musician based in Detroit, MI. I play keys, guitar, and bass, and my production work focuses strictly on worship music. I am also an apologist, currently writing 'Defending Oneness'. My mission is to create worship music that moves people spiritually and to provide reasoned guidance in faith.",
      image: `${import.meta.env.BASE_URL}assets/corey.jpg`
    },
    // Add more team members here
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">OliveBranch</h1>
        <p className="text-xl max-w-xl mx-auto">
          Faith-Driven Music, Media & Digital Services
        </p>
      </section>

      {/* About Us Section */}
      <section className="max-w-6xl w-full px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">About Us</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 bg-gray-100 text-center">
        <h3 className="text-2xl font-bold mb-4">Explore Our Work</h3>
        <p className="mb-6">Check out multitracks, chord charts, and other resources.</p>
        <a
          href="/#/products"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          View Products
        </a>
      </section>
    </div>
  );
}

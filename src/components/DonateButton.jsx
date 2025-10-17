// src/components/DonateButton.jsx
import React from "react";

const DonateButton = () => {
  const donationLink = "https://square.link/u/huF3F8FL";

  return (
    <a
      href={donationLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
    >
      Donate Now
    </a>
  );
};

export default DonateButton;

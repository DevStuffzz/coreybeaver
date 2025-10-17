import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-3 flex justify-between items-center font-semibold hover:text-indigo-600 transition"
      >
        {question}
        <span className="ml-2">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-700 text-base md:text-lg">{answer}</p>
      )}
    </div>
  );
};

export default FAQItem;

import React from "react";
import VerseOfTheDay from "../components/VerseOfTheDay";
import DonateButton from "../components/DonateButton";

// Service Card
const ServiceCard = ({ title, description, requirements, pricing, link }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col w-full max-w-sm">
    <h4 className="text-xl md:text-2xl font-semibold mb-4">{title}</h4>
    <p className="mb-4 text-sm md:text-base">{description}</p>
    {requirements && <p className="mb-4 text-sm md:text-base"><strong>What you provide:</strong> {requirements}</p>}
    {pricing && <p className="mb-4 text-sm md:text-base"><strong>Pricing:</strong> {pricing}</p>}
    {link && (
      <div className="mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Submit Request
        </a>
      </div>
    )}
  </div>
);

// Instrument Card
const InstrumentCard = ({ title, time, classes, price, notes }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col w-full max-w-sm">
    <h4 className="text-xl md:text-2xl font-semibold mb-4">{title}</h4>
    <p className="mb-4 text-sm md:text-base">{time}. {classes} classes total. ${price} per class. {notes}</p>
  </div>
);

// FAQ Item
const FAQItem = ({ question, answer }) => (
  <div className="mb-6">
    <h4 className="text-xl md:text-2xl font-semibold mb-2">{question}</h4>
    <p className="text-sm md:text-base text-gray-700">{answer}</p>
  </div>
);

// Team Member Card
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

// About Us Section
const AboutUs = ({ teamMembers }) => (
  <section className="max-w-6xl w-full px-4 md:px-6 py-12 md:py-16 bg-gray-50 text-center">
    <h2 className="text-2xl md:text-3xl font-semibold mb-8">About Us</h2>
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} {...member} />
      ))}
    </div>
  </section>
);

export default function Home() {
  const teamMembers = [
    {
      name: "Corey Beaver",
      role: "Founder & Apostolic Pentecostal Producer",
      bio: "Hi, I’m Corey Beaver, based in Detroit, MI. I play keys, guitar, and bass, and I lead music production at OliveBranch. I’ve studied music for over 8 years and aim to create immersive worship and media experiences.",
      image: `${import.meta.env.BASE_URL}assets/corey.jpg`
    },
    // Add more team members here later
  ];

  const services = [
    {
      title: "Mixing",
      description: "Professional mixing of your song from raw stems. I balance levels, EQ, compression, and polish your track to release-ready quality.",
      requirements: "Raw stems for each instrument and vocal track.",
      pricing: "$25 per 5 minutes of audio, $5 per track over 10.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScFOY_7nQm3w2EGSDgrdUnXnoXiWhDIOwtbzMaRZRt53gPdtg/viewform?usp=sharing&ouid=116124265933555451389"
    },
    {
      title: "Song Tracking",
      description: "Add instruments to your recording to complete your arrangement.",
      requirements: "Basic demo or guide track.",
      pricing: "Negotiable per song.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdsB-CZSDTMrhYkEd1VHFN9_2twGTBuJ2pE8xlhaDUJsKoQyw/viewform?usp=sharing&ouid=116124265933555451389"
    },
    {
      title: "Web Development",
      description: "Full-stack websites, from responsive landing pages to custom web applications.",
      requirements: "Project details, design preferences, and content.",
      pricing: "Starting at $500 per project, negotiable.",
      link: "https://forms.gle/webdev"
    },
    {
      title: "Photo & Video Editing",
      description: "Professional editing for photos, videos, thumbnails, or worship media content.",
      requirements: "Raw files and project requirements.",
      pricing: "Starting at $50 per hour.",
      link: "https://forms.gle/photoedit"
    },
    {
      title: "Graphic Design / Branding",
      description: "Logos, banners, social media graphics, and brand identity services.",
      requirements: "Design brief and reference images.",
      pricing: "Starting at $100 per project.",
      link: "https://forms.gle/graphicdesign"
    }
  ];

  const instruments = [
    { title: "Piano", time: "Sundays at 5:00 PM", classes: 7, price: 20, notes: "Instruments provided but bring your own if preferred. Remember your in-ear monitors." },
    { title: "Acoustic Guitar", time: "Sundays at 5:30 PM", classes: 7, price: 20, notes: "Learn chord progressions, rhythm, and playing with the band. Instruments provided; bring your own if available." },
    { title: "Electric Guitar", time: "Sundays at 6:00 PM", classes: 7, price: 20, notes: "Focus on lead lines, dynamics, and worship-style guitar. Bring your in-ear monitors; instruments provided." },
    { title: "Bass Guitar", time: "Sundays at 6:30 PM", classes: 7, price: 20, notes: "Learn groove, timing, and rhythm for worship. Instruments provided; bring your own if available, along with in-ear monitors." }
  ];

  const faqs = [
    { question: "Do I need my own equipment for the Worship Band Fundamentals class?", answer: "Yes. Some instruments will be provided at Ascend Church, but we might not have instruments for every member. Also remember to bring your own In-Ear Monitors." },
    { question: "How long does a mixing session take?", answer: "Each song depends on length and complexity, but typically 7 days for a full mix (note that sometimes your song might be in a waitlist). I respond within 24–48 hours to all requests." },
    { question: "What do I need to submit for song tracking?", answer: "Provide a basic recording of your song (guide track or rough demo). Specify which instruments you need tracked, and I’ll take care of the rest." },
    { question: "How much does the Worship Band Fundamentals class cost?", answer: "$20 per class, with 7 classes for each instrument (Piano, Acoustic Guitar, Electric Guitar)." },
    { question: "Can I take multiple instruments in the course?", answer: "Yes! You can enroll in Piano, Acoustic Guitar, and Electric Guitar classes. Each instrument has its own schedule on Sundays." },
    { question: "Do you offer online classes?", answer: "Currently, classes are in-person only at Ascend Church. Online classes may be offered in the future." },
    { question: "How are payments for services handled?", answer: "Payment is processed via secure links (Square) after submission of your request. Prices for mixing, tracking, and classes are listed in their respective sections." },
    { question: "What is your main goal with the course?", answer: "The main goal is to teach musicians to play effectively in a worship band and to guide participants toward Acts 2:38 salvation." }
  ];

  return (
    <div className="min-h-screen text-gray-800 flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full text-white py-20 px-4 md:py-24 md:px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-rotate" style={{ backgroundSize: "200% 200%" }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">OliveBranch</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">Faith-Driven Music, Media & Digital Services</p>
      </section>

      {/* About Us Section */}
      <AboutUs teamMembers={teamMembers} />

      {/* Explore Products */}
      <section className="w-full py-12 md:py-16 bg-gray-100 text-center px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Explore Our Work</h3>
        <p className="mb-6 text-base md:text-lg">Check out multitracks, chord charts, courses, and more coming soon.</p>
        <a href="#/products" className="inline-block bg-indigo-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          View Products
        </a>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl w-full px-4 md:px-6 pt-16 md:pt-20 pb-16 bg-gray-50 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Services</h3>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8">
          {services.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
        <p className="text-gray-600 text-sm mt-6">I will respond within 24–48 hours. 10% of proceeds go to tithes, 20% support UPCI Move the Missions, and the rest fund OliveBranch operations.</p>
      </section>

      {/* Worship Band Fundamentals */}
      <section className="w-full py-12 md:py-16 bg-gray-100 text-center px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Worship Band Fundamentals</h3>
        <p className="mb-8 max-w-3xl mx-auto text-base md:text-lg">Learn to play in a worship band effectively while growing spiritually. In-person only at <strong>Ascend Church</strong>.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 mb-8">
          {instruments.map((inst, i) => <InstrumentCard key={i} {...inst} />)}
        </div>
        <p className="text-gray-600 text-sm mb-6">Seats are limited, registration coming soon!</p>
        <button disabled className="bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold cursor-not-allowed">Registration Closed</button>
      </section>

      {/* Mission Statement */}
      <section className="w-full py-12 md:py-16 bg-gray-50 text-center px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
        <p className="mb-8 max-w-3xl mx-auto text-base md:text-lg">Our mission is to inspire and equip worship leaders, musicians, and creators through professional music production, digital media services, and live worship experiences. The goal is to guide people into the salvation of <strong>Acts 2:38</strong>.</p>
      </section>

      {/* Donation Section */}
<section className="w-full py-12 md:py-16 bg-grey-100 text-center px-4 md:px-6">
  <h3 className="text-2xl md:text-3xl font-bold mb-4">Support OliveBranch Media</h3>
  <p className="mb-6 max-w-3xl mx-auto text-base md:text-lg">
    Your donations help us create faith-centered music, media, and digital resources for the Oneness Pentecostal community.
    Every gift empowers our mission to inspire and equip believers worldwide.
  </p>
  <DonateButton />
</section>

      {/* Verse of the Day */}
      <section className="w-full py-12 md:py-16 bg-gray-50 text-center px-4 md:px-6">
        <VerseOfTheDay />
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-16 bg-gray-100 text-center px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h3>
        <div className="max-w-4xl mx-auto text-left">
          {faqs.map((f, i) => <FAQItem key={i} {...f} />)}
        </div>
      </section>
    </div>
  );
}

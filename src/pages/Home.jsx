import React from "react";
import VerseOfTheDay from "../components/VerseOfTheDay";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-800 flex flex-col items-center">
      {/* Hero Section */}
      <section
        className="w-full text-white py-20 px-4 md:py-24 md:px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-rotate"
        style={{ backgroundSize: "200% 200%" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Corey Beaver</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Apostolic Pentecostal Producer & Musician
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-4xl w-full px-4 md:px-6 py-12 md:py-16 flex flex-col md:flex-row items-center md:items-start md:gap-12 bg-gray-50">
        <div className="w-48 h-48 md:w-64 md:h-64 mb-6 md:mb-0 rounded-full overflow-hidden shadow-lg flex-shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}assets/corey.jpg`}
            alt="Corey Beaver"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">About Me</h2>
          <p className="mb-4 text-base md:text-lg">
            Hi, I’m <strong>Corey Beaver</strong>, an Apostolic Pentecostal
            producer based in Detroit, MI. I mainly play keys, including piano,
            organ, and auxiliary instruments, but I also play guitar and bass.
          </p>
          <p className="mb-4 text-base md:text-lg">
            I am the main keys player for <strong>Ascend Church</strong> in
            Troy, MI, and I’ve studied music for over 8 years. My passion lies
            in creating immersive musical experiences for worship and
            production.
          </p>
          <p className="text-indigo-600 font-semibold text-base md:text-lg">
            Let’s make music that moves people.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-16 bg-gray-100 text-center px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Explore My Work</h3>
        <p className="mb-6 text-base md:text-lg">
          Check out my multitracks, chord charts, and more coming soon.
        </p>
        <a
          href="#/products"
          className="inline-block bg-indigo-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          View Products
        </a>
      </section>

      {/* Commissions / Services Section */}
      <section className="max-w-4xl w-full px-4 md:px-6 pt-16 md:pt-20 pb-16 bg-gray-50 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Work With Me</h3>
        <p className="mb-8 max-w-2xl mx-auto text-base md:text-lg">
          I offer professional <strong>Mixing</strong> and{" "}
          <strong>Song Tracking</strong> services for musicians and worship
          teams.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 mb-8">
          {/* Mixing */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col w-full max-w-sm">
            <h4 className="text-xl md:text-2xl font-semibold mb-4">Mixing</h4>
            <p className="mb-4 text-sm md:text-base">
              Professional mixing of your song from raw stems. I balance levels,
              adjust EQ, apply compression, add effects, and polish your track
              to a high-quality, release-ready mix.
            </p>
            <p className="mb-4 text-sm md:text-base">
              <strong>What you provide:</strong> Raw stems for each instrument
              and vocal track.
              <br />
              <br />
              <strong>Pricing:</strong> $25 for every 5 minutes of audio, plus
              $5 for every track over 10 (excluding click/cue tracks).
            </p>
            <div className="mt-auto">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScFOY_7nQm3w2EGSDgrdUnXnoXiWhDIOwtbzMaRZRt53gPdtg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Submit Mixing Request
              </a>
            </div>
          </div>

          {/* Song Tracking */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col w-full max-w-sm">
            <h4 className="text-xl md:text-2xl font-semibold mb-4">
              Song Tracking
            </h4>
            <p className="mb-4 text-sm md:text-base">
              I can track additional instruments on top of your basic recording
              to complete your arrangement.
            </p>
            <p className="mb-4 text-sm md:text-base">
              <strong>What you provide:</strong> A basic recording of your song
              (could be a rough demo or guide track).
              <br />
              <strong>Pricing:</strong> Negotiable based on song length, style,
              complexity, and number of tracks.
            </p>
            <div className="mt-auto">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdsB-CZSDTMrhYkEd1VHFN9_2twGTBuJ2pE8xlhaDUJsKoQyw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Submit Tracking Request
              </a>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-2">
          I will respond within 24–48 hours.
        </p>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          10% of proceeds go to tithes, 20% support UPCI Move the Missions, and
          the remaining funds go toward website maintenance, recording
          equipment, and other ministry needs.
        </p>
      </section>

      {/* Worship Band Fundamentals Section */}
      <section className="w-full py-12 md:py-16 bg-gray-100 text-center px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Worship Band Fundamentals
        </h3>
        <p className="mb-8 max-w-3xl mx-auto text-base md:text-lg">
          Learn to play in a worship band effectively while growing spiritually.
          Classes will help you develop skill, confidence, and a heart for
          worship. In-person only at <strong>Ascend Church</strong>.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 mb-8">
          {/* Piano */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col w-full max-w-sm">
            <h4 className="text-xl md:text-2xl font-semibold mb-4">Piano</h4>
            <p className="mb-4 text-sm md:text-base">
              Sundays at 5:00 PM. 7 classes total. $20 per class. Instruments
              provided but bring your own if preferred. Remember your in-ear
              monitors.
            </p>
          </div>

          {/* Acoustic Guitar */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col w-full max-w-sm">
            <h4 className="text-xl md:text-2xl font-semibold mb-4">
              Acoustic Guitar
            </h4>
            <p className="mb-4 text-sm md:text-base">
              Sundays at 5:30 PM. 7 classes total. $20 per class. Learn chord
              progressions, rhythm, and playing with the band. Instruments
              provided; bring your own if available.
            </p>
          </div>

          {/* Electric Guitar */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col w-full max-w-sm">
            <h4 className="text-xl md:text-2xl font-semibold mb-4">
              Electric Guitar
            </h4>
            <p className="mb-4 text-sm md:text-base">
              Sundays at 6:00 PM. 7 classes total. $20 per class. Focus on lead
              lines, dynamics, and worship-style guitar. Bring your in-ear
              monitors; instruments provided.
            </p>
          </div>

          {/* Bass Guitar */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col w-full max-w-sm">
            <h4 className="text-xl md:text-2xl font-semibold mb-4">
              Bass Guitar
            </h4>
            <p className="mb-4 text-sm md:text-base">
              Sundays at 6:30 PM. 7 classes total. $20 per class. Learn groove,
              timing, and rhythm for worship. Instruments provided; bring your
              own if available, along with in-ear monitors.
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-6">
          Seats are limited, registration coming soon!
        </p>

        {/* Toggle Registration */}
        {true /* change to false to open registration */ ? (
          <button
            disabled
            className="bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold cursor-not-allowed"
          >
            Registration Closed
          </button>
        ) : (
          <a
            href="YOUR_REGISTRATION_LINK_HERE"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Register Now
          </a>
        )}
      </section>

      {/* Mission Statement Section */}
      <section className="w-full py-12 md:py-16 bg-gray-50 text-center px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">My Mission</h3>
        <p className="mb-8 max-w-3xl mx-auto text-base md:text-lg">
          My mission is to inspire and equip worship leaders, musicians, and
          congregations through professional music production, training, and
          live worship experiences. The main goal of my courses and ministry is
          to guide people into the salvation of <strong>Acts 2:38</strong>.
        </p>
      </section>

      {/* Verse of the Day Section */}
      <section className="w-full py-12 md:py-16 bg-gray-100 text-center px-4 md:px-6">
        <VerseOfTheDay />
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-16 bg-gray-50 text-center px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h3>
        <div className="max-w-4xl mx-auto text-left">
          {/* Question 1 */}{" "}
          <div className="mb-6">
            {" "}
            <h4 className="text-xl md:text-2xl font-semibold mb-2">
              Do I need my own equipment for the Worship Band Fundamentals
              class?
            </h4>{" "}
            <p className="text-sm md:text-base text-gray-700">
              {" "}
              Yes. Some instruments will be provided at Ascend Church, but we
              might not have instruments for every member. Also remember to
              bring your own In-Ear Monitors.{" "}
            </p>{" "}
          </div>{" "}
          {/* Question 2 */}{" "}
          <div className="mb-6">
            {" "}
            <h4 className="text-xl md:text-2xl font-semibold mb-2">
              How long does a mixing session take?
            </h4>{" "}
            <p className="text-sm md:text-base text-gray-700">
              {" "}
              Each song depends on length and complexity, but typically 7 days
              for a full mix (note that someimes your song might be in a
              waitlist). I respond within 24–48 hours to all requests.{" "}
            </p>{" "}
          </div>{" "}
          {/* Question 3 */}{" "}
          <div className="mb-6">
            {" "}
            <h4 className="text-xl md:text-2xl font-semibold mb-2">
              What do I need to submit for song tracking?
            </h4>{" "}
            <p className="text-sm md:text-base text-gray-700">
              {" "}
              Provide a basic recording of your song (guide track or rough
              demo). Specify which instruments you need tracked, and I’ll take
              care of the rest.{" "}
            </p>{" "}
          </div>{" "}
          {/* Question 4 */}{" "}
          <div className="mb-6">
            {" "}
            <h4 className="text-xl md:text-2xl font-semibold mb-2">
              How much does the Worship Band Fundamentals class cost?
            </h4>{" "}
            <p className="text-sm md:text-base text-gray-700">
              {" "}
              $20 per class, with 7 classes for each instrument (Piano, Acoustic
              Guitar, Electric Guitar).{" "}
            </p>{" "}
          </div>{" "}
          {/* Question 5 */}{" "}
          <div className="mb-6">
            {" "}
            <h4 className="text-xl md:text-2xl font-semibold mb-2">
              Can I take multiple instruments in the course?
            </h4>{" "}
            <p className="text-sm md:text-base text-gray-700">
              {" "}
              Yes! You can enroll in Piano, Acoustic Guitar, and Electric Guitar
              classes. Each instrument has its own schedule on Sundays.{" "}
            </p>{" "}
          </div>{" "}
          {/* Question 6 */}{" "}
          <div className="mb-6">
            {" "}
            <h4 className="text-xl md:text-2xl font-semibold mb-2">
              Do you offer online classes?
            </h4>{" "}
            <p className="text-sm md:text-base text-gray-700">
              {" "}
              Currently, classes are in-person only at Ascend Church. Online
              classes may be offered in the future.{" "}
            </p>{" "}
          </div>{" "}
          {/* Question 7 */}{" "}
          <div className="mb-6">
            {" "}
            <h4 className="text-xl md:text-2xl font-semibold mb-2">
              How are payments for services handled?
            </h4>{" "}
            <p className="text-sm md:text-base text-gray-700">
              {" "}
              Payment is processed via secure links (Square) after submission of
              your request. Prices for mixing, tracking, and classes are listed
              in their respective sections.{" "}
            </p>{" "}
          </div>{" "}
          {/* Question 8 */}{" "}
          <div className="mb-6">
            {" "}
            <h4 className="text-xl md:text-2xl font-semibold mb-2">
              What is your main goal with the course?
            </h4>{" "}
            <p className="text-sm md:text-base text-gray-700">
              {" "}
              The main goal is to teach musicians to play effectively in a
              worship band and to guide participants toward Acts 2:38 salvation.{" "}
            </p>{" "}
          </div>{" "}
        </div>
      </section>
    </div>
  );
}

// src/pages/Legal.jsx
import React from "react";

export default function Legal() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Legal & Privacy</h1>

      {/* Privacy Policy */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p className="mb-4">
          Your privacy is extremely important. Any personal information you provide (via forms, email, or service requests) is used solely to respond to inquiries, process service requests, and improve your experience on this website.
        </p>
        <p className="mb-4">
          I do not sell, rent, or trade your personal data. I may use anonymized analytics tools (e.g., Google Analytics) to improve the website. Cookies, if used, are only for site functionality and analytics.
        </p>
        <p className="mb-4">
          By using this website, you consent to this Privacy Policy. You may request deletion of your personal information at any time by contacting me.
        </p>
      </section>

      {/* Terms of Service */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
        <p className="mb-4">
          By using this website or submitting a request for services, you agree to the following:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>All mixing and tracking services are performed remotely based on the files you provide.</li>
          <li>Payment is required before work begins, unless otherwise agreed. Prices are outlined on the website or via direct communication.</li>
          <li>I reserve the right to decline any project that does not align with my services, values, or capabilities.</li>
          <li>All projects are delivered digitally. I am not responsible for physical damage or loss of files after delivery.</li>
          <li>You may not redistribute, resell, or claim ownership of work provided unless explicitly granted permission.</li>
          <li>By submitting files, you confirm you own the rights or have permission to use all content in the project.</li>
        </ul>
      </section>

      {/* Refund Policy */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Payment & Refund Policy</h2>
        <p className="mb-4">
          Payment for mixing, tracking, or other services must be completed prior to delivery. Refunds are only considered if a service is not delivered as agreed. Minor revisions are included in the initial service; additional revisions may incur extra charges.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
        <p className="mb-4">
          The information on this website and any services provided are for informational purposes. I make no guarantees about results, outcomes, or accuracy. Use of services is at your own risk. I am not liable for indirect, incidental, or consequential damages arising from use of the website or services.
        </p>
      </section>

      {/* Copyright */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Copyright & Intellectual Property</h2>
        <p className="mb-4">
          All content on this website, including text, images, logos, and audio, is the property of Corey Beaver or used with permission. Unauthorized use, reproduction, or distribution is prohibited. Work delivered to clients remains property of the client only if explicitly agreed upon in writing.
        </p>
      </section>

      {/* Third-party services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
        <p className="mb-4">
          This website may contain links to third-party websites or services. I am not responsible for the privacy practices, content, or accuracy of these external sites. Use them at your own risk.
        </p>
      </section>

      {/* Children */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
        <p>
          This website and services are not directed to children under 13. I do not knowingly collect personal information from children. If you believe your child has provided information, please contact me to have it removed.
        </p>
      </section>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Corey Beaver. All rights reserved.
      </div>
    </div>
  );
}

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
          Your privacy is extremely important to us. Any personal information you provide, including but not limited to your name, email address, payment information, and project files, is collected solely to provide our services, respond to inquiries, process payments, and improve your experience on this website.
        </p>
        <p className="mb-4">
          We store information securely in compliance with applicable laws. We do not sell, rent, or trade your personal data. Any analytics data collected through tools such as Google Analytics is anonymized and used solely to improve site performance and usability.
        </p>
        <p className="mb-4">
          Cookies, if used, are limited to site functionality, analytics, and session management. You can manage or disable cookies through your browser settings, but certain features may be affected.
        </p>
        <p className="mb-4">
          By using this website, you consent to this Privacy Policy. You may request access to, modification, or deletion of your personal information at any time by contacting us directly at <a href="mailto:cb050129@gmail.com" className="text-indigo-600 underline">cb050129@gmail.com</a>.
        </p>
        <p className="mb-4">
          This website may comply with data protection regulations such as the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA) where applicable. Users have the right to opt-out of data collection for non-essential purposes.
        </p>
      </section>

      {/* Terms of Service */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
        <p className="mb-4">
          By using this website or submitting a request for services, you agree to the following terms:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>All mixing, tracking, and other services are performed remotely based on the files and instructions you provide.</li>
          <li>Payment is required prior to the commencement of work unless otherwise explicitly agreed upon in writing. Prices are outlined on the website or communicated directly.</li>
          <li>We reserve the right to decline or terminate any project that does not align with our services, values, or legal obligations.</li>
          <li>All deliverables are provided digitally. Once delivered, we are not responsible for any physical damage or data loss that occurs on your devices.</li>
          <li>You may not redistribute, resell, or claim ownership of work provided unless explicitly granted in writing.</li>
          <li>By submitting files, you confirm that you own all rights or have obtained proper permission to use any third-party content included in the project.</li>
          <li>All disputes will be governed by the laws of the state in which OliveBranch operates, without regard to conflict-of-law principles.</li>
        </ul>
      </section>

      {/* Payment & Refund Policy */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Payment & Refund Policy</h2>
        <p className="mb-4">
          Full payment is required prior to delivery of services, unless a different arrangement is agreed upon in writing. Refunds are only considered if a service is not delivered as agreed or is defective.
        </p>
        <p className="mb-4">
          Minor revisions are included in the initial service agreement. Additional revisions beyond the agreed scope may incur extra charges, which will be communicated before implementation.
        </p>
        <p className="mb-4">
          Payments are processed securely via trusted payment providers. We are not responsible for payment disputes arising from your payment provider.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
        <p className="mb-4">
          The information and services provided on this website are for informational purposes only. We make no guarantees regarding the accuracy, completeness, or results of any service provided. Use of this website or services is at your own risk.
        </p>
        <p className="mb-4">
          OliveBranch is not liable for indirect, incidental, consequential, or punitive damages arising from the use of this website or any services, even if advised of the possibility of such damages. This includes, but is not limited to, lost profits, data loss, or business interruption.
        </p>
      </section>

      {/* Copyright & Intellectual Property */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Copyright & Intellectual Property</h2>
        <p className="mb-4">
          All content on this website, including text, images, logos, and audio, is owned by Corey Beaver or used with explicit permission. Unauthorized use, reproduction, or distribution is strictly prohibited.
        </p>
        <p className="mb-4">
          Any work delivered to clients remains the property of the client only if explicitly agreed upon in writing. We retain the right to showcase projects in portfolios, social media, and promotional materials unless otherwise specified.
        </p>
      </section>

      {/* Third-Party Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
        <p className="mb-4">
          This website may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or accuracy of external sites. Use of third-party services is governed by their own terms and policies. Linking to third-party services does not imply endorsement.
        </p>
      </section>

      {/* Children's Privacy */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
        <p className="mb-4">
          This website and the services provided are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe your child has provided personal information, please contact us immediately to have it removed.
        </p>
        <p>
          Parents or guardians may request information regarding the data collected about their children and can request deletion in accordance with applicable data protection laws.
        </p>
      </section>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} OliveBranch. All rights reserved.
      </div>
    </div>
  );
}

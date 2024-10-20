import React from 'react';

function Privacy() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-white text-gray-900 p-6">
      <div className="bg-white p-10 rounded-3xl  max-w-3xl w-full border border-gray-300">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 tracking-tight font-poppins">
          Privacy Policy
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed font-poppins">
          Welcome to Trend Basket! Your privacy is of paramount importance to us. This Privacy Policy document explains the types of data we collect, how we use that data, and the steps we take to protect your personal information.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-5 font-poppins">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 mb-4 text-lg font-poppins">
            We collect the following types of personal information:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 font-poppins">
            <li>Email address</li>
            <li>Name</li>
            <li>Billing and shipping information</li>
            <li>Device and browser information</li>
            <li>IP address</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-5 font-poppins">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-4 text-lg font-poppins">
            The information we collect is used to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 font-poppins">
            <li>Provide and maintain our services</li>
            <li>Process your transactions and manage your account</li>
            <li>Communicate with you about updates, offers, and other relevant information</li>
            <li>Improve our website and services</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-5 font-poppins">
            3. Data Security
          </h2>
          <p className="text-gray-700 mb-4 text-lg font-poppins">
            We take the security of your data seriously. We use industry-standard encryption technologies to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-5 font-poppins">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-700 mb-4 text-lg font-poppins">
            We do not sell, rent, or trade your personal information to third parties. We may share your data with:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 font-poppins">
            <li>Service providers that help us operate our services (e.g., payment processors, shipping partners)</li>
            <li>Legal authorities if required by law</li>
            <li>Third-party analytics tools to help us improve our website</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-5 font-poppins">
            5. Your Rights
          </h2>
          <p className="text-gray-700 mb-4 text-lg font-poppins">
            As a user, you have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 font-poppins">
            <li>Access your personal data we have collected</li>
            <li>Request correction or deletion of your personal information</li>
            <li>Withdraw your consent for data processing at any time (where applicable)</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-5 font-poppins">
            6. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 mb-4 text-lg font-poppins">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will provide notice if the changes are significant. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your data.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-5 font-poppins">
            7. Contact Us
          </h2>
          <p className="text-gray-700 mb-4 text-lg font-poppins">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-700 text-lg font-poppins">
            Email: <a href="mailto:support@trendbasket.com" className="text-indigo-600 hover:underline font-poppins">support@trendbasket.com</a>
          </p>
        </section>

        <p className="text-center text-gray-600 text-sm mt-6 font-poppins">
          Last updated: <span className="font-semibold">October 20, 2024</span>
        </p>
      </div>
    </div>
  );
}

export default Privacy;

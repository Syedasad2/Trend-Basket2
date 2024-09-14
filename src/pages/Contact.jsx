
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4 w-screen">
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
            Contact Us
          </h1>
          <p className="text-center text-gray-700 text-lg mb-8">
            We’re here to assist you! Drop us a message or reach out through the contact details below.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-r from-green-100 via-teal-100 to-cyan-100 p-8 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-4">
                Feel free to contact us through the following ways:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-800">
                  <svg
                    className="w-6 h-6 mr-3 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h2a6 6 0 016 6h2a6 6 0 016-6h2M12 3v9m0 0h9m-9 0H3"
                    />
                  </svg>
                  <span><strong>Email:</strong> Syedasad@gmail.com</span>
                </li>
                <li className="flex items-center text-gray-800">
                  <svg
                    className="w-6 h-6 mr-3 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2 7a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V7zm0 6v2a2 2 0 002 2h4a2 2 0 002-2v-2m-4 2H4a2 2 0 00-2 2v1a2 2 0 002 2h4a2 2 0 002-2v-1a2 2 0 00-2-2zm16-6h-4a2 2 0 00-2 2v2a2 2 0 002 2h4a2 2 0 002-2V7a2 2 0 00-2-2zm-2 4v-2a2 2 0 012-2h4a2 2 0 012 2v2m0 6v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 0h4a2 2 0 002-2v-1a2 2 0 00-2-2h-4a2 2 0 00-2 2v1a2 2 0 002 2z"
                    />
                  </svg>
                  <span><strong>Phone:</strong> +92 317 2172330</span>
                </li>
                <li className="flex items-center text-gray-800">
                  <svg
                    className="w-6 h-6 mr-3 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 7V4a1 1 0 00-1-1H5a1 1 0 00-1 1v3m0 0h8m-8 0V9a1 1 0 011-1h4a1 1 0 011 1v2m0 0h8m-8 0v3m0 0v1a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1m6-5a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span><strong>Address:</strong> 123 Main Street, Karachi, Pakistan</span>
                </li>
              </ul>
            </div>

            <form className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <div className="mb-5">
                <label
                  className="block text-gray-700 mb-2 text-lg"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-5">
                <label
                  className="block text-gray-700 mb-2 text-lg"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-5">
                <label
                  className="block text-gray-700 mb-2 text-lg"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-400 via-teal-300 to-cyan-200 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

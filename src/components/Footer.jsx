import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-300">
      <div className="container mx-auto text-center px-4">
        {/* Footer Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Connected</h2>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            className="text-pink-500 hover:text-pink-700 transition duration-300 ease-in-out"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center space-x-8 mb-8 text-sm md:text-lg">
          <a
            href="/About"
            className="font-semibold text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            About Us
          </a>
          <a
            href="/Contact"
            className="font-semibold text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
          <a
            href="/Privacy"
            className="font-semibold text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            Privacy Policy
          </a>
        </div>

        {/* Newsletter Subscription */}
        <div className="mb-8">
          <p className="text-xl font-semibold text-gray-900 mb-4">Subscribe to Our Newsletter</p>
          <div className="flex justify-center flex-col md:flex-row items-center md:space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 w-80 md:w-96 rounded-l-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out mb-4 md:mb-0"
            />
            <button className="bg-blue-600 text-white p-4 rounded-r-full hover:bg-blue-700 transition duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright Notice */}
        <p className="text-sm text-gray-500 mb-6">&copy; 2024 TrendBasket. All rights reserved.</p>

        {/* Footer Signature */}
        <p className="text-xs text-gray-400">
          Designed with <FaHeart className="inline text-red-500" /> by Syed Asad
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        {/* Footer Header */}
        <h2 className="text-2xl font-semibold mb-6">Stay Connected</h2>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" className="text-white hover:text-gray-400 transition-colors text-3xl">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-gray-400 transition-colors text-3xl">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-gray-400 transition-colors text-3xl">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="text-sm mb-4">&copy; 2024 E-Shop. All rights reserved.</p>

        {/* Footer Signature */}
        <p className="text-xs text-gray-400">
          Designed with <FaHeart className="inline text-red-400" /> by Syed Asad
        </p>
      </div>
    </footer>
  );
};

export default Footer;

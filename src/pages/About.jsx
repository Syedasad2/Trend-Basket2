
import React from 'react';
import { FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555529669-2269763671c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
              alt="Company team working together"
              className="w-full h-[300px] object-cover md:h-[350px] lg:h-[400px] xl:h-[450px] transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white z-10 text-shadow-lg">About Us</h1>
            </div>
          </div>
          <div className="p-8 space-y-6">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Welcome to our company! We are passionate about delivering quality products and services that exceed our customers' expectations. Our team is dedicated to ensuring that you have the best experience with us. We believe in innovation, integrity, and excellence, and these values drive everything we do.
            </p>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Our journey began with a simple idea, and over the years, we have grown into a trusted name in the industry. We are committed to continuous improvement and always strive to provide exceptional value to our customers. Thank you for being a part of our story. We look forward to serving you and building lasting relationships.
            </p>
            <div className="flex items-center space-x-2">
              <FaHeart className="text-red-500 text-2xl" />
              <span className="text-gray-700 text-lg font-medium">We love what we do!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

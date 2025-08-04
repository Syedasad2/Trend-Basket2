import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

const HomePage = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-[#19842b] text-[#2C3E50] text-center flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-[#FFEBE2] opacity-90"></div>

        <div className="absolute z-0 top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 opacity-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-[#25a131] animate__animated animate__fadeIn animate__delay-1s"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2L2 6l4 4" />
            <path d="M18 22l4-4-4-4" />
            <path d="M12 14l4-4-4-4" />
            <path d="M8 8L12 4" />
            <path d="M16 16L12 12" />
          </svg>
        </div>

        <div className="absolute z-0 top-2/3 right-1/4 transform translate-x-1/4 translate-y-1/4 opacity-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-[#1c831f] animate__animated animate__fadeIn animate__delay-2s"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 1l-1 7H4L3 1H1" />
            <circle cx="12" cy="20" r="5" />
            <line x1="12" y1="2" x2="12" y2="20" />
          </svg>
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-6xl w-full text-center px-4 py-16">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 animate__animated animate__slideInDown animate__delay-0.5s" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Welcome to <span className="text-[#f2f5f3]">TrendBasket</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#7F8C8D] mb-8 opacity-90 animate__animated animate__fadeIn animate__delay-1s" style={{ fontFamily: "'Lora', serif" }}>
            Discover top products and exclusive deals designed just for you.
          </p>

          {/* Shop Now Button */}
          <Link to="/products">
            <button className="bg-[#198449] text-white px-8 py-4 text-lg md:text-xl font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 animate__animated animate__zoomIn animate__delay-1.5s">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-black">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <FeaturedProduct
            title="Stylish Sneakers"
            image="https://media.istockphoto.com/id/1407127841/photo/white-sneaker-with-colored-accents-on-a-green-gradient-background-mens-fashion-sport-shoe-air.jpg?s=1024x1024&w=is&k=20&c=kXx_rRgyPYsFx5MM6SJ3lO-nyv39dC9r6bpSbxrP-9g="
            price="$79.99"
            link="/products"
          />
          <FeaturedProduct
            title="Elegant Watch"
            image="https://media.istockphoto.com/id/172787384/photo/watch.jpg?s=1024x1024&w=is&k=20&c=tRVoLXwur2DxZRZWJ7C0wYnfhhfUO6Sq0lRTW5t_ONE="
            price="$149.99"
            link="/products"
          />
          <FeaturedProduct
            title="Modern Backpack"
            image="https://media.istockphoto.com/id/1362790255/photo/mens-dark-blue-backpack-made-of-textile-a-white-background.jpg?s=1024x1024&w=is&k=20&c=B1fi4LCjsPjV8pbaupocmElx5ZWf5W9kq9DHgk7szhs="
            price="$59.99"
            link="/products"
          />
          <FeaturedProduct
            title="Beautiful Jewelry"
            image="https://media.istockphoto.com/id/511374700/photo/jewellery-closeup-on-female-hands.jpg?s=1024x1024&w=is&k=20&c=FRSRSWUXmlN8JH_H01r-QAb76fQEcPy_7XKKua4Pcig="
            price="$59.99"
            link="/products"
          />
        </div>
      </div>
    </div>
  );
};

const FeaturedProduct = ({ title, image, price, link }) => (
  <div className="border border-gray-300 rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full max-w-xs mx-auto">
    <Link to={link}>
      <img
        alt={title}
        className="object-cover object-center w-full h-56 sm:h-64 md:h-72 lg:h-80"
        src={image}
      />
      <div className="p-6">
        <h3 className="text-black text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-base font-medium">{price}</p>
      </div>
    </Link>
  </div>
);

export default HomePage;

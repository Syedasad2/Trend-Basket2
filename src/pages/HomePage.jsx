import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

const HomePage = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-white text-black text-center flex flex-col items-center justify-center min-h-screen px-4 py-12 overflow-hidden">
        {/* Background with gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 opacity-60 animate__animated animate__fadeIn animate__delay-0.5s"></div>

        {/* Animated text entrance */}
        <div className="relative z-10 max-w-6xl w-full text-center px-4 py-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to TrendBasket
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
            Discover the best products with amazing discounts.
          </p>

          <Link to="/products">
            <button className="bg-white text-black px-8 py-4 text-lg md:text-xl font-semibold rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate__pulse animate__animated animate__fadeIn animate__delay-3s">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Floating and bouncing elements */}
        <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate__animated animate__fadeIn animate__delay-4s">
          <div className="w-40 h-40 bg-pink-300 rounded-full animate__animated animate__bounce animate__infinite"></div>
        </div>

        <div className="absolute z-0 top-1/4 right-1/4 transform -translate-x-1/4 -translate-y-1/4 animate__animated animate__fadeIn animate__delay-4.5s">
          <div className="w-32 h-32 bg-purple-400 rounded-full animate__animated animate__bounce animate__infinite"></div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 text-black">
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
        className="object-cover object-center w-full h-56 sm:h-64 md:h-72"
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

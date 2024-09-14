import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gray-800 text-white text-center flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-6xl w-full text-center px-4 py-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to TrendBasket
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
            Discover the best products with amazing discounts.
          </p>
          <Link to="/products">
            <button className="bg-white text-gray-900 px-8 py-4 text-lg md:text-xl font-semibold rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 animate__animated animate__fadeIn animate__delay-3s">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 text-white">
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
  <div className="border border-gray-700 rounded-xl shadow-lg overflow-hidden bg-gray-800 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full max-w-xs mx-auto">
    <Link to={link}>
      <img
        alt={title}
        className="object-cover object-center w-full h-56 sm:h-64 md:h-72"
        src={image}
      />
      <div className="p-6">
        <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-base font-medium">{price}</p>
      </div>
    </Link>
  </div>
);

export default HomePage;

import React from "react";
import PropTypes from "prop-types";
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const ProductCard = React.memo(({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative border border-gray-300 rounded-lg shadow-xl overflow-hidden bg-white transform hover:scale-105 transition-transform duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-4 cursor-pointer"
    >
      <img
        alt={product.title}
        className="object-cover object-center w-full h-48 transition-transform duration-300 hover:scale-110"
        src={product.image}
      />
      <div className="p-6">
        <h3 className="text-gray-800 text-lg font-semibold mb-2 truncate">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.category}</p>
        <p className="text-gray-900 text-lg font-bold">${product.price}</p>
      </div>

      <div className="absolute top-4 right-4 flex space-x-2">
        <button
          aria-label={`Add ${product.title} to favorites`}
          className="bg-white text-red-500 p-2 rounded-full shadow-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
        >
          <FaHeart />
        </button>
        <button
          aria-label={`Add ${product.title} to cart`}
          className="bg-white text-green-500 p-2 rounded-full shadow-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
        >
          <FaCartPlus />
        </button>
      </div>
    </div>
  );
});

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;

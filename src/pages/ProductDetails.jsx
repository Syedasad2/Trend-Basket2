import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import Error from "../components/Error";
import { useCart } from "../context/CartContext";
import { Button } from "@nextui-org/react";
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, isInCart } = useCart();
  const { user } = useContext(AuthContext); // Access user information from AuthContext
  const navigate = useNavigate(); // For navigation purposes
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const fetchProduct = useCallback(async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
      setIsAdded(isInCart(response.data.id));
    } catch (err) {
      console.error("Error fetching product:", err);
      setError("Failed to fetch product details");
    } finally {
      setLoading(false);
    }
  }, [id, isInCart]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const handleCartAction = () => {
    if (!user.isLogin) {
      // Redirect to login page if not logged in
      navigate('/signin');
      return;
    }

    if (isAdded) {
      removeFromCart(product.id);
      setIsAdded(false);
    } else {
      addToCart(product);
      setIsAdded(true);
    }
  };

  const truncateDescription = (description, limit = 100) => {
    if (description.length <= limit) return description;
    return `${description.substring(0, limit)}...`;
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <Error message={error} />;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      <div className="bg-white max-w-4xl w-full p-6 md:p-10 lg:p-12 rounded-lg shadow-lg border border-gray-200">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover object-center rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            />
          </div>

          {/* Product Details Section */}
          <div className="w-full lg:w-1/2 lg:pl-10 flex flex-col">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">{product.title}</h1>
            <p className="text-lg text-gray-600 mb-3">{product.category}</p>
            <p className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">${product.price}</p>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              {isDescriptionExpanded ? product.description : truncateDescription(product.description)}
              <button
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="text-blue-500 hover:text-blue-600 ml-2 text-xs font-medium underline"
              >
                {isDescriptionExpanded ? "Show Less" : "Read More"}
              </button>
            </p>

            {/* Cart Button */}
            <Button
              onClick={handleCartAction}
              className={`px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 ${
                isAdded
                  ? "bg-red-600 hover:bg-red-700 shadow-lg"
                  : "bg-purple-600 hover:bg-purple-700 shadow-lg"
              }`}
            >
              {isAdded ? "Remove from Cart" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

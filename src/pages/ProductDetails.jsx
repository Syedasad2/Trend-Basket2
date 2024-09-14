import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import Error from "../components/Error";
import { useCart } from "../context/CartContext"; // Import useCart

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, isInCart } = useCart(); // Use the cart context
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
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
    };

    fetchProduct();
  }, [id, isInCart]);

  const handleCartAction = () => {
    if (isAdded) {
      removeFromCart(product.id);
      setIsAdded(false);
    } else {
      addToCart(product);
      setIsAdded(true);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <Error message={error} />;

  return (
    <div className="p-4 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen w-screen">
      <div className="max-w-screen-lg mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-xl mt-8 mb-16">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover object-center rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-between space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">{product.title}</h1>
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-600">{product.category}</p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">${product.price}</p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">{product.description}</p>
            <button
              onClick={handleCartAction}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 shadow-lg transform ${
                isAdded ? "bg-red-500 text-white hover:bg-red-600" : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {isAdded ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

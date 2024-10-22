import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "credit-card",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment or order processing
    setTimeout(() => {
      alert("Order placed successfully!");
      clearCart(); // Clear the cart after the order is placed
      navigate("/"); // Redirect to the homepage or order confirmation page
    }, 2000);
  };

  if (cart.length === 0) {
    return <p className="text-center text-lg text-gray-600 mt-10">Your cart is empty. Please add items to the cart to proceed.</p>;
  }

  return (
    <div className="w-screen bg-gradient-to-r from-blue-50 to-white p-6 mt-10">
      <div className="max-w-4xl mx-auto bg-grey p-8 rounded-lg transition-all duration-300 ease-in-out hover:scale-105">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Checkout</h2>

        {/* Shipping Information */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">

            {/* Name Input */}
            <div>
              <label className="block text-gray-700 font-medium text-lg mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-700 font-medium text-lg mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
              />
            </div>

            {/* Address Input */}
            <div>
              <label className="block text-gray-700 font-medium text-lg mb-2">Shipping Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-gray-700 font-medium text-lg mb-2">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
              >
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            {/* Cart Items List */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800">Your Cart Items</h3>
              <ul className="space-y-4 mt-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between items-center border-b pb-2 mb-2">
                    <span className="text-gray-700 text-lg">{item.title}</span>
                    <span className="text-gray-600 text-lg">
                      {item.quantity} × ${item.price.toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Total Price */}
            <div className="mt-6 flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800">Total:</span>
              <span className="text-lg font-bold text-gray-800">${calculateTotalPrice()}</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 mt-6 bg-orange-600 text-white text-lg font-semibold rounded-lg transition transform hover:bg-orange-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                isProcessing ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Place Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

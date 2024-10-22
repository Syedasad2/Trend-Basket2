import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';

const CartItem = ({ item, removeFromCart }) => {
  const fallbackImage = 'https://via.placeholder.com/150';

  return (
    <li key={item.id} className="flex flex-col sm:flex-row items-center p-5 border-b border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 bg-white">
      <img
        src={item.image || fallbackImage}
        alt={item.title}
        className="w-32 h-32 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6 shadow-md transition-transform duration-300 hover:scale-110"
      />
      <div className="flex-1">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{item.title}</h2>
        <p className="text-sm text-gray-600 mb-2">Quantity: {item.quantity}</p>
        <p className="text-lg font-bold text-gray-800">${parseFloat(item.price).toFixed(2)}</p>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-600 hover:text-red-800 transition-colors mt-2 sm:mt-0 hover:scale-110 transform"
      >
        <FaTrashAlt size={22} />
      </button>
    </li>
  );
};

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    console.log("Cart has been updated:", cart);
  }, [cart]);

  const calculateTotalPrice = () => {
    const total = cart.reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);

      if (isNaN(price) || isNaN(quantity)) {
        console.error(`Invalid data for item ${item.title}: price=${price}, quantity=${quantity}`);
        return total;
      }

      return total + (price * quantity);
    }, 0);

    return total.toFixed(2);
  };

  return (
    <div className="w-screen bg-gradient-to-br from-gray-50 to-gray-200 animate-gradient mt-20 pt-10">
      <div className="container mx-auto p-6 max-w-3xl bg-white shadow-2xl rounded-lg w-full mt-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-900 text-center">Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your cart is empty. Add some products to your cart!</p>
        ) : (
          <div>
            <ul className="space-y-6">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  removeFromCart={removeFromCart}
                />
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-6">
              <p className="text-2xl sm:text-3xl font-semibold text-gray-900">Total: ${calculateTotalPrice()}</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 mt-4 sm:mt-0">
                <button
                  onClick={clearCart}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Clear Cart
                </button>
                <Link
                  to="/checkout"
                  className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;

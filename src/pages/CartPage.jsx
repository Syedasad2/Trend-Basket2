import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart for cart context
import { FaTrashAlt } from 'react-icons/fa';


const CartItem = ({ item, removeFromCart }) => {
  const fallbackImage = 'https://via.placeholder.com/150';

  return (
    <li key={item.id} className="flex flex-col sm:flex-row items-center p-4 border-b border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
      <img
        src={item.image || fallbackImage}
        alt={item.title}
        className="w-32 h-32 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4 shadow-md"
      />
      <div className="flex-1">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{item.title}</h2>
        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
        <p className="text-lg font-bold text-gray-800">${parseFloat(item.price).toFixed(2)}</p>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-600 hover:text-red-800 transition-colors mt-2 sm:mt-0"
      >
        <FaTrashAlt size={20} />
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
    console.log("Cart Data for Total Calculation:", cart); 

    const total = cart.reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);

      console.log(`Item: ${item.title}, Price: ${price}, Quantity: ${quantity}`);

      if (isNaN(price) || isNaN(quantity)) {
        console.error(`Invalid data for item ${item.title}: price=${price}, quantity=${quantity}`);
        return total;
      }

      return total + (price * quantity); 
    }, 0);

    console.log("Calculated Total Price:", total); 
    return total.toFixed(2); 
  };

  return (
    <div className="w-screen">
      <div className="container mx-auto p-6 max-w-3xl bg-white shadow-lg rounded-lg w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-800">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
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
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">Total: ${calculateTotalPrice()}</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 mt-4 sm:mt-0">
                <button
                  onClick={clearCart}
                  className="px-5 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors"
                >
                  Clear Cart
                </button>
                <Link to="/checkout" className="px-5 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors">
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

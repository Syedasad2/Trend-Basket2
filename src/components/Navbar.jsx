import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBox, FaInfoCircle, FaEnvelope, FaSignOutAlt, FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from '../context/Authcontext';
import { useCart } from '../context/CartContext'; // Import useCart for cart context
import { Avatar } from '@nextui-org/react';

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const { cart } = useCart(); // Access cart from CartContext

  const [isCartOpen, setIsCartOpen] = useState(false); // State to toggle cart dropdown

  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="bg-black text-white shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-3xl font-bold flex items-center tracking-wider hover:text-gray-300 transition-colors">
          <FaBox className="mr-2 text-gray-300" />
          Trend Basket
        </Link>
        <ul className="flex space-x-6 items-center">
          <NavItem to="/" icon={<FaHome />} label="Home" />
          <NavItem to="/products" icon={<FaBox />} label="Products" />
          <NavItem to="/about" icon={<FaInfoCircle />} label="About" />
          <NavItem to="/contact" icon={<FaEnvelope />} label="Contact" />
          <li className="relative">
            <button onClick={toggleCartDropdown} className="flex items-center text-lg font-semibold hover:text-gray-300 transition-colors relative">
              <FaShoppingCart className="mr-2 text-gray-300" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cart.length}
                </span>
              )}
            </button>
            {isCartOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-lg border border-gray-300 z-40">
                <ul className="max-h-60 overflow-y-auto">
                  {cart.length === 0 ? (
                    <li className="p-4 text-center text-gray-600">Your cart is empty.</li>
                  ) : (
                    cart.map((item) => (
                      <li key={item.id} className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-100">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md mr-4" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                          <p className="text-xs text-gray-600">${item.price}</p>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
                <Link to="/cart" className="block text-center p-2 bg-blue-600 text-white rounded-b-lg hover:bg-blue-700">
                  View Cart
                </Link>
              </div>
            )}
          </li>
          {user.isLogin ? (
            <>
              <li className="relative">
                <Avatar src={user.userInfo.photoURL} size="md" className="border-2 border-white hover:border-gray-300 transition-all duration-300" />
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="flex items-center text-lg font-semibold hover:text-gray-300 transition-colors"
                >
                  <FaSignOutAlt className="mr-2 text-gray-300" /> Log Out
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/signin" className="flex items-center text-lg font-semibold hover:text-gray-300 transition-colors">
                <FaEnvelope className="mr-2 text-gray-300" /> Log In
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, icon, label }) => (
  <li>
    <Link
      to={to}
      className="flex items-center text-lg font-semibold text-white hover:text-gray-300 transition-colors relative"
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Link>
  </li>
);

export default Navbar;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBox, FaInfoCircle, FaEnvelope, FaSignOutAlt, FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from '../context/Authcontext';
import { useCart } from '../context/CartContext'; // Import useCart for cart context
import { Avatar, Button } from '@nextui-org/react';

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const { cart } = useCart(); // Access cart from CartContext

  return (
    <nav className="bg-black text-white shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-3xl font-bold flex items-center tracking-wider hover:text-gray-300 transition-colors-relative">
          <FaBox className="mr-2 text-gray-300" />
          Trend Basket
        </Link>
        <ul className="flex space-x-6 items-center">
          <NavItem to="/" icon={<FaHome />} label="Home" />
          <NavItem to="/products" icon={<FaBox />} label="Products" />
          <NavItem to="/about" icon={<FaInfoCircle />} label="About" />
          <NavItem to="/contact" icon={<FaEnvelope />} label="Contact" />
          <li className="relative">
            <Link to="/cart" className="flex items-center text-lg font-semibold hover:text-gray-300 transition-colors relative">
              <FaShoppingCart className="mr-2 text-gray-300" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cart.length}
                </span>
              )}
            </Link>
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

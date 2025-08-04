import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaDollyFlatbed, FaInfoCircle, FaRocketchat, FaSignOutAlt, FaShoppingCart, FaEarlybirds, FaEnvelope } from 'react-icons/fa';
import { AuthContext } from '../context/Authcontext';
import { useCart } from '../context/CartContext'; 

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const { cart } = useCart(); 

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white text-green-500 fixed top-0 w-full z-50 transition-transform ${
        isScrolled ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand Logo */}
        <Link to="/" className="text-3xl font-bold flex items-center tracking-wider hover:text-gray-300 transition-colors">
          <FaEarlybirds className="mr-2 text-green-500" />
          <span className="text-green-600">Trend Basket</span>
        </Link>

      
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl">
            &#9776;
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-8 items-center transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white shadow-lg z-50 md:relative md:flex-row md:space-x-8' : 'hidden md:flex'
          }`}
        >
          <NavItem to="/" icon={<FaHome />} label="Home" />
          <NavItem to="/products" icon={<FaDollyFlatbed />} label="Products" />
          <NavItem to="/about" icon={<FaInfoCircle />} label="About" />
          <NavItem to="/contact" icon={<FaRocketchat />} label="Contact" />

          {/* Cart Dropdown - Hover enabled */}
          <li className="relative group">
            <button
              className="flex items-center text-lg font-semibold hover:text-white transition-all relative"
            >
              <FaShoppingCart className="mr-2 text-green-600" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cart.length}
                </span>
              )}
            </button>

            {/* Hover dropdown */}
            <div className="absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-lg border border-gray-300 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform group-hover:scale-105">
              <ul className="max-h-60 overflow-y-auto">
                {cart.length === 0 ? (
                  <li className="p-4 text-center text-red-600">Your cart is empty.</li>
                ) : (
                  cart.map((item) => (
                    <li key={item.id} className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md mr-4" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800 truncate">{item.title}</p>
                        <p className="text-xs text-gray-600">${item.price}</p>
                      </div>
                    </li>
                  ))
                )}
              </ul>
              <Link to="/cart" className="block text-center p-2 bg-green-600 text-white rounded-b-lg hover:bg-green-700 transition-all">
                View Cart
              </Link>
            </div>
          </li>

          {/* Auth section */}
          {user.isLogin ? (
            <li>
              <button
                onClick={handleSignOut}
                className="flex items-center text-lg font-semibold hover:text-gray-300 transition-colors"
              >
                <FaSignOutAlt className="mr-2 text-red-800" /> Log Out
              </button>
            </li>
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
      className="flex items-center text-lg font-semibold text-green-600 hover:text-gray-500 transition-all relative"
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Link>
  </li>
);

export default Navbar;

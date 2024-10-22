import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart or increase its quantity if already exists
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear all products from the cart
  const clearCart = () => {
    setCart([]);
  };

  // Check if product is in the cart
  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

// src/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context for the cart
const CartContext = createContext();

// Create a provider component
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);

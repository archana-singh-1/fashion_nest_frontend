import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 


  const addToCart = (item) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.find((cartItem) => cartItem._id === item._id);
      return isItemInCart ? prevCart : [...prevCart, item]; 
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

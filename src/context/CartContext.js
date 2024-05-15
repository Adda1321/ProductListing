import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  // useState hook to maintain the state of the cart
  const [cart, setCart] = useState([]);
  const addToCart = product => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        );
      } else {
        return [...prevCart, {...product, quantity: 1}];
      }
    });
  };
  // Provide the cart state and addToCart function to the children components.
  return (
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

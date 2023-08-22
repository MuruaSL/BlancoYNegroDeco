import React, { createContext, useContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const cartLength = cart.length;
    const cartLengthForCartWidget=cart.reduce((total, item) => total + item.quantity, 0);
    return (
        <ShoppingCartContext.Provider value={{ cart, setCart, cartLength, cartLengthForCartWidget }}>
        {children}
        </ShoppingCartContext.Provider>
    );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);

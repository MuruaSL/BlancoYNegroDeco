import React, { createContext, useContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const cartLength = cart.length;
    const cartLengthForCartWidget=cart.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cart.reduce((total,item)=> total + (item.precio * item.quantity),0) ;    


    ///Funciones

    //AGREGAR Al carrito
    const addItem = (product, quantity) => {
        const updatedCart = [...cart];
        const existingItemIndex = updatedCart.findIndex(item => item.id === product.id);
    
        if (existingItemIndex !== -1) {
          // Si esta en el carrito , solo suma la cantidad
            updatedCart[existingItemIndex].quantity += quantity;
            } else {
            // sino lo agrega por unica vez
            updatedCart.push({ ...product, quantity });
            }
        setCart(updatedCart);
    };
    
    //ELIMINAR del carrito
    const removeItem = productId => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };
    
    // VACIAR EL CARRITO
    const clearCart = () => {
        setCart([]);
    };

    // Corroborar si un item por id esta en el carrito
    const isInCart = productId => cart.some(item => item.id === productId);
    

    return (
        <ShoppingCartContext.Provider value={{ cart, setCart, cartLength, cartLengthForCartWidget,cartTotal,addItem,removeItem,clearCart,isInCart }}>
        {children}
        </ShoppingCartContext.Provider>
    );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);

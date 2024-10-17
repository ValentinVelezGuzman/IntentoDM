import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const itemExists = cartItems.find(cartItem => cartItem.id === item.id);
        if (itemExists) {
            setCartItems(
                cartItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const updateItemQuantity = (itemId, quantity) => {
        if (quantity < 1) return; // Ensure quantity does not go below 1

        setCartItems(
            cartItems.map(cartItem =>
                cartItem.id === itemId ? { ...cartItem, quantity } : cartItem
            )
        );
    };

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateItemQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

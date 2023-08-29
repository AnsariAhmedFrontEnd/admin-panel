import React from "react";

const CartContext = React.createContext({
    cartItems:[],
    totalAmount: 0,
    addItems: (item) => {}
});

export default CartContext;
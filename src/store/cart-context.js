import React from "react";

const CartContext = React.createContext({
    cartItems:[],
    addItems: (item) => {}
});

export default CartContext;
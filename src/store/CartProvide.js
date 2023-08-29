import React, {useState} from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [cartItemsArray, setCartItemsArray] = useState([]);

    const addItemsToCart = (item) => {
        setCartItemsArray(previousItems => [...previousItems, item]);
    };

    const cartItems = {
        cartItems:cartItemsArray,
        addItems:addItemsToCart
    }
    return (
        <CartContext.Provider value={cartItems}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider
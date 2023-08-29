import React, { useState, useEffect, useCallback } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItemsArray, setCartItemsArray] = useState([]);
  const url = "https://crudcrud.com/api/4baacf051e5547a4ba08f08df2140b67/cart";

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCartItemsArray(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addItemsToCart = async (item) => {
    try {
        await fetch(url, {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        fetchData();
      } catch (error) {
        console.log(error);
      }
  };

  const calculateTotalAmount = () => {
    const amount =  cartItemsArray.reduce((total, item) => total + Number(item.price), 0);
  
    return amount;
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const cartItems = {
    cartItems: cartItemsArray,
    totalAmount:calculateTotalAmount(),
    addItems: addItemsToCart,
  };
  return (
    <CartContext.Provider value={cartItems}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

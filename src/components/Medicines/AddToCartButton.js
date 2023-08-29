import React, { useContext } from "react";
import CartContext from '../../store/cart-context';

const AddToCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItems(props.items);
  };
  return <button onClick={addToCartHandler}>Add To Cart</button>;
};

export default AddToCartButton;

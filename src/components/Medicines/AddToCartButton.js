import React, { useContext } from "react";
import CartContext from '../../store/cart-context';

const AddToCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    const name = props.items.name;
    const description = props.items.description;
    const price = props.items.price;

    const cartObj = {
      name:name,
      description:description,
      price:price
    }
    cartCtx.addItems(cartObj);
  };
  return <button onClick={addToCartHandler}>Add To Cart</button>;
};

export default AddToCartButton;

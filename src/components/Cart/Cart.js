import React, { useContext } from "react";
import Modal from '../UI/Modal'
import CartContext from "../../store/cart-context";
import CartItems from "./CartItems";
import './Cart.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.cartItems.map((item) => {

    return (
      <CartItems
      key={item._id}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    );
  });
  return (
    <Modal onBackdropClick={props.onClose}>
      <div className="cart-modal">
      <h2>{cartItems}</h2>
      <div>Total Amount = {cartCtx.totalAmount}</div>
      <button onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default Cart;

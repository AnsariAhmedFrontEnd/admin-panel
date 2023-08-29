import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./Header.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.cartItems.length;
  return (
    <header className="header">
      <div>
        <h2>MyPharmacy</h2>
      </div>
      <div className="cart">
        <button onClick={props.onCartOpen}>
          <span>Cart</span>
        <span className="badge">{numberOfCartItems}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

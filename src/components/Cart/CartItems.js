import './CartItems.css';
const CartItems = (props) => {
  return (
    <div className="cart-item">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p className="price">Rs. {props.price}</p>
    </div>
  );
};

export default CartItems;

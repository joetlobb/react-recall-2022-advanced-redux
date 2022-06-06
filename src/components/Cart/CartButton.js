import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const quantity = useSelector((state) => state.cartItems.quantity);

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;

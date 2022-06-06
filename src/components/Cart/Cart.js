import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const quantity = useSelector((state) => state.cartItems.quantity);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {quantity === 0 && <p>No item in your cart, please add some!</p>}
      <ul>
        <CartItem />
      </ul>
    </Card>
  );
};

export default Cart;

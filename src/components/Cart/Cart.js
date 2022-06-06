import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cartItems);
  const itemsList = items.map((item) => (
    <CartItem key={item.title} items={item} />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <p>No item in your cart, please add some!</p>
      <ul>
        {itemsList}
      </ul>
    </Card>
  );
};

export default Cart;

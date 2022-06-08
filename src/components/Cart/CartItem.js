import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({id, price, title}));
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const cartItemContent = (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );

  return (
    <React.Fragment>{quantity !== 0 ? cartItemContent : null}</React.Fragment>
  );
};

export default CartItem;

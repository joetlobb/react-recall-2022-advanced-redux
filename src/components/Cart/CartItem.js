import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { cartsActions } from "../../store";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price } = useSelector((state) => state.cartItems);


  const increaseItemInCartHandler = () => {
    dispatch(cartsActions.increaseItemInCart());
  };
  const decreaseItemInCartHandler = () => {
    dispatch(cartsActions.decreaseItemInCart());
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
          <button onClick={decreaseItemInCartHandler}>-</button>
          <button onClick={increaseItemInCartHandler}>+</button>
        </div>
      </div>
    </li>
  );

  return (
    <React.Fragment>{quantity !== 0 ? cartItemContent : null}</React.Fragment>
  );
};

export default CartItem;

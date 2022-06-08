import { useDispatch, useSelector } from "react-redux";

import { cartsActions } from "../../store/index";

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const { title, price, description } = props;

  const addItemToCartHandler = () => {
    if (cartItems.length !== 0) {
      let titleList = [];
      for (let i = 0; i < cartItems.length; i++) {
        titleList.push(cartItems[i].title);
      }
      if (titleList.includes(title)) {
        dispatch(cartsActions.increaseItemInCart(title));
      } else {
        dispatch(cartsActions.addItemToCart({ title, price }));
      }
    } else {
      dispatch(cartsActions.addItemToCart({ title, price }));
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  
  const items = useSelector((state) => state.cartItems.cartItems);
  let totalItems = 0;
  for (let i = 0; i < items.length; i++) {
    totalItems = totalItems + items[i].quantity;
  }

  const showCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;

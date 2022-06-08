import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [{ title: "Test Item", quantity: 3, total: 18, price: 6 }],
};

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    increaseItemInCart(state, action) {
      const index = state.cartItems.findIndex(
        (item) => item.title === action.payload
      );
      state.cartItems[index].quantity++;
      state.cartItems[index].total =
        state.cartItems[index].total + state.cartItems[index].price;
    },
    decreaseItemInCart(state, action) {
      const index = state.cartItems.findIndex(
        (item) => item.title === action.payload
      );
      state.cartItems[index].quantity--;
      state.cartItems[index].total =
        state.cartItems[index].total - state.cartItems[index].price;

      if (state.cartItems[index].quantity === 0) {
        state.cartItems.splice(index, 1);
      }
    },
    addItemToCart(state, action) {
      const item = {
        title: action.payload.title,
        quantity: 1,
        total: action.payload.price,
        price: action.payload.price,
      };
      state.cartItems.push(item);
    },
  },
});

const store = configureStore({
  reducer: cartsSlice.reducer,
});

export const cartsActions = cartsSlice.actions;
export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: { title: "Test Item", quantity: 3, total: 18, price: 6 },
};

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    increaseItemInCart(state) {
      state.cartItems.quantity++;
      state.cartItems.total = state.cartItems.total + state.cartItems.price;
    },
    decreaseItemInCart(state) {
      state.cartItems.quantity--;
      state.cartItems.total = state.cartItems.total - state.cartItems.price;
    },
  },
});

const store = configureStore({
  reducer: cartsSlice.reducer,
});

export const cartsActions = cartsSlice.actions;
export default store;

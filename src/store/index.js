import { configureStore, createSlice } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export const cartsActions = cartItemsSlice.actions;
export const cartStateActions = cartStateSlice.actions;
export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: { title: "Test Item", quantity: 3, total: 18, price: 6 },
};

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
});

const store = configureStore({
  reducer: cartsSlice.reducer,
});

export default store;

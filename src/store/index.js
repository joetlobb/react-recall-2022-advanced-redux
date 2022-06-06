import { configureStore, createSlice } from "@reactjs/toolkit";

const initialState = {};

const slice = createSlice({
  name: state,
  initialState,
  reducers: {
    add(state) {},
  },
});

const store = configureStore({ reducer: slice });

export default store;

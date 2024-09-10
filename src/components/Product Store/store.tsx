import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Cart slice/cartSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import filterReducer from "./features/filterSlice";
import pizzaReducer from "./features/pizzaSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    pizza: pizzaReducer,
  },
});

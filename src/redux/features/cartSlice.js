import { createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getFromCartLocalStorage } from "../../utils/getFromCartLocalStorage";

const{items,totalPrice} = getFromCartLocalStorage();
const initialState = {
  categoryId: 0,
  totalPrice,
  items,

};
const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items)
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items)
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});
export const { addItem, removeItem, clearCart, minusItem } = cartSlice.actions;
export default cartSlice.reducer;

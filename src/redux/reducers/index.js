/** @format */

import { createSlice } from "@reduxjs/toolkit";

// Define a slice for the shopping cart
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const index = state.findIndex(i => i.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find(i => i.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export default cartSlice.reducer;

// Export the cart slice's actions
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

var cart = JSON.parse(localStorage.getItem("cart")) || [];

const addToCart = payload => {
  var item = {
    cart: payload,
    quantity: 1,
  };
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart); // for debugging purposes
};
